import React from 'react';
import './StudentProfile.css';

const data = [
  { name: "John Doe", age: 30, gender: "Male" },
  { name: "Jane Smith", age: 25, gender: "Female" },
  { name: "Alice Johnson", age: 35, gender: "Female" },
  { name: "Bob Williams", age: 28, gender: "Male" },
  { name: "Charlie Brown", age: 40, gender: "Male" }
];


function StudentProfile() {

  return (
    <div className="student_table">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default StudentProfile;