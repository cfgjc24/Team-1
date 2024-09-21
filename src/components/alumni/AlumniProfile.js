import React from "react";
import './AlumniProfile.css';

function AlumniProfile() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>LinkedIn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>30</td>
            <td>Male</td>
            <td><a href="https://linkedin.com">LinkedIn</a></td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>25</td>
            <td>Female</td>
            <td><a href="https://linkedin.com">LinkedIn</a></td>
          </tr>
          <tr>
            <td>Alice Johnson</td>
            <td>35</td>
            <td>Female</td>
            <td><a href="https://linkedin.com">LinkedIn</a></td>
          </tr>
          <tr>
            <td>Bob Williams</td>
            <td>28</td>
            <td>Male</td>
            <td><a href="https://linkedin.com">LinkedIn</a></td>
          </tr>
          <tr>
            <td>Charlie Brown</td>
            <td>40</td>
            <td>Male</td>
            <td><a href="https://linkedin.com">LinkedIn</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AlumniProfile;