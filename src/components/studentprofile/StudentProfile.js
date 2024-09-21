import React from "react";
import './StudentProfile.css';

const StudentTable = () => {
  return (
    <div className="student_table">
      <div className="table-container">
        <h2>Student Information</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>30</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>25</td>
              <td>Female</td>
            </tr>
            <tr>
              <td>Alice Johnson</td>
              <td>35</td>
              <td>Female</td>
            </tr>
            <tr>
              <td>Bob Williams</td>
              <td>28</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Charlie Brown</td>
              <td>40</td>
              <td>Male</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
