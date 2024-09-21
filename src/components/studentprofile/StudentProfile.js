import React, { useState, useEffect } from "react";
import './StudentProfile.css';

function StudentProfile() {
  const [studentsData, setStudents] = useState([]);

  useEffect(() => {
    fetch("/students")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setStudents(data); // Assuming data is the array of students
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="student-container">
      {studentsData.length > 0 ? (
        <table className="students-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>High School</th>
              <th>Parent Name</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student) => (
              <tr key={student.studentID}>
                <td>{`${student.first_name || "N/A"} ${student.last_name || "N/A"}`}</td>
                <td>{student.email || "N/A"}</td>
                <td>{student.phone_number || "N/A"}</td>
                <td>{student.high_school || "N/A"}</td>
                <td>{student.parent_data ? student.parent_data.parent_name : "N/A"}</td>
                <td>
                  {student.studentProgress ? (
                    student.studentProgress.is_onboarded ? "Onboarded" : "Not Onboarded"
                  ) : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading students...</p>
      )}
    </div>
  );
}

export default StudentProfile;