import './admin.css';
import React from 'react';
import '../adminstuff/Sidebar.js';
import { Link } from 'react-router-dom';



function Sidebar() {
  return (
    <div className="sidebar">
      <h1> Dashboard</h1>
      <h2> Student Progress</h2>
      <h2>Tutor Profiles</h2>
     <h2>Alumni Portal </h2>
    </div>
  );
}

export default Sidebar;
