import React, { useState } from 'react';
import './Admin.css';
import Dashboard from "../components/dashboard/Dashboard"
import StudentProfile from "../components/studentprofile/StudentProfile"
import TutorProfile from "../components/tutor/TutorProfile"
import AlumniProfile from "../components/alumni/AlumniProfile"
// Component to display content based on the selected tab
function PageSection({ tab }) {
  if (tab === "Dashboard") {
    return <Dashboard/>;
  } else if (tab === "StudentProfiles") {
    return <StudentProfile/>;
  } else if (tab === "TutorProfiles") {
    return <TutorProfile/>;
  } else if (tab === "AlumniPortal") {
    return <AlumniProfile/>;
  }
  return <h2>Welcome to the Admin Panel</h2>;
}

// Viewbar component
function Viewbar({ setTab }) {
    return (
      <div className="viewbar">
        <ul className="horizontal-list">
          <li onClick={() => setTab("Dashboard")}>Dashboard</li>
          <li onClick={() => setTab("StudentProfiles")}>Student Profiles</li>
          <li onClick={() => setTab("TutorProfiles")}>Tutor Profiles</li>
          <li onClick={() => setTab("AlumniPortal")}>Alumni Portal</li>
        </ul>
      </div>
    );
  }
  

function Admin() {
  const [tab, setTab] = useState("Dashboard");

  return (
    <div className="admin-container">

      {/* Content section with Viewbar and PageSection */}
      <div className="main-content">
        <Viewbar setTab={setTab} />
        <div className="page-section">
          <PageSection tab={tab} />
        </div>
      </div>
    </div>
  );
}

export default Admin;