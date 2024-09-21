import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Menu</div>
      <ul className="sidebar-menu">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#people">People</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#calendar">Calendar</a></li>
        <li><a href="#training">Training</a></li>
        <li><a href="#timesheet">Timesheet</a></li>
        <li><a href="#reports">Reports</a></li>
        <li><a href="#help">Help</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
