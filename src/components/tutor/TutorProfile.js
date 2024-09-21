import React, { useState, useEffect } from "react";
import './TutorProfile.css';

function TutorProfile() {
  const [tutorsData, setTutors] = useState([]);

  useEffect(() => {
    fetch("/tutors")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setTutors(data); // Assuming data is already the array of tutors
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="table-container">
      {tutorsData.length > 0 ? (
        <table className="tutors-table">
          <thead>
            <tr>
              <th>Tutor Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Assigned High School</th>
              <th>College</th>
              <th>Assigned Students</th>
            </tr>
          </thead>
          <tbody>
            {tutorsData.map((tutor) => (
              <tr key={tutor.TutorID}>
                <td>{`${tutor.first_name} ${tutor.last_name}`}</td>
                <td>{tutor.email || "N/A"}</td>
                <td>{tutor.phone_number || "N/A"}</td>
                <td>{tutor.assigned_high_school || "N/A"}</td>
                <td>{tutor.college || "N/A"}</td>
                <td>
                  {tutor.assigned_students && tutor.assigned_students.length > 0 ? (
                    <ul>
                      {tutor.assigned_students.map((student, index) => (
                        <li key={index}>{student}</li>
                      ))}
                    </ul>
                  ) : (
                    "No assigned students"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading Tutors...</p>
      )}
    </div>
  );
}

export default TutorProfile;