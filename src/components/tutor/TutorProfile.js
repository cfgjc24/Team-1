import React from "react";
import ProgressBar from "./progressBarComponent"; // Import the progress bar component

// Define student data once
const studentsData = [
  { name: "John Doe", progress: 0.75 },
  { name: "Jane Smith", progress: 0.45 },
  { name: "Alice Johnson", progress: 0.90 },
  { name: "Bob Williams", progress: 0.60 },
];

function tutorAdmin() {
  return (
    <div className="tutor-container">
      <h1>Tutor: Student Progress</h1>

      {/* Dynamically render student progress */}
      {studentsData.map((student, index) => (
        <div key={index} className="student-progress">
          <span className="student-label">{student.name}</span> {/* Add student name */}
          <ProgressBar
            progressValue={student.progress}
            backgroundClassName="progress-bar-background"
            barClassName="progress-bar"
            sidePadding="5px"
          />
        </div>
      ))}
    </div>
  );
}

export default tutorAdmin;
