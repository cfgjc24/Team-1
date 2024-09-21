import React, {useState, useEffect} from "react";
import ProgressBar from "./progressBarComponent"; // Import the progress bar component
import './progressBar.css';  

// const studentsData = [
//   { name: "John Doe", progress: 0.75 },
//   { name: "Jane Smith", progress: 0.45 },
//   { name: "Alice Johnson", progress: 0.90 },
//   { name: "Bob Williams", progress: 0.60 },
// ];


function TutorProfile() {
  const [tutorsData, setTutors] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/tutors")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("got data")
        var arr = Object.values(data)[0]
        console.log(arr)
        setTutors(arr);
        console.log(tutorsData)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="tutor-container">
      <h1>Tutors</h1>
      <p>{tutorsData}</p>
      
    </div>
  );
}

export default TutorProfile;
