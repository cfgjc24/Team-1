import './Tutor.css';
import { useState, useEffect } from 'react';

const Tutor = () => {
  const [students, setStudents] = useState([]);

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

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className='tutor-container'>
      <div className='left-side'>
        <div className='heading-box'>
          <h1>Students</h1>
        </div>
        {students.map((student, index) => (
          <div key={index} className='student-row'>
            <h2>{`${student.first_name} ${student.last_name}`}</h2>
            <button className='button' onClick={() => handleStudentSelect(student)}>Information</button>
          </div>
        ))}
      </div>

      <div className='right-side'>
        {selectedStudent ? (
          <div className='student-details'>
            <h2>{`${selectedStudent.first_name} ${selectedStudent.last_name}`}</h2>
            <p><strong>Email:</strong> {selectedStudent.email}</p>
            <p><strong>Phone:</strong> {selectedStudent.phone_number}</p>
            <p><strong>High School:</strong> {selectedStudent.high_school}</p>
            <p><strong>Date of Birth:</strong> {selectedStudent.DateOfBirth}</p>
            <h3>Demographics</h3>
            <p><strong>Race:</strong> {selectedStudent.studentDemographic.race}</p>
            <p><strong>Gender:</strong> {selectedStudent.studentDemographic.gender}</p>
            <p><strong>Age:</strong> {selectedStudent.studentDemographic.age}</p>
            <h3>Progress</h3>
            <p><strong>Onboarded:</strong> {selectedStudent.studentProgress.is_onboarded ? 'Yes' : 'No'}</p>
            <p><strong>Graduated:</strong> {selectedStudent.studentProgress.is_graduated ? 'Yes' : 'No'}</p>
          </div>
        ) : (
          <p>Select a student to see details</p>
        )}
      </div>
    </div>
  );
};

export default Tutor;