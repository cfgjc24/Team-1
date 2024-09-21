import React, { useState } from 'react';
import './Admin.css';
import Dashboard from "../components/dashboard/Dashboard"
import StudentProfile from "../components/studentprofile/StudentProfile"

// Component to display content based on the selected tab
function PageSection({ tab }) {
  if (tab === "Dashboard") {
    return <Dashboard/>;
  } else if (tab === "StudentProfiles") {
    return <StudentProfile/>;
  } else if (tab === "TutorProfiles") {
    return <h2>Tutor Profiles Content</h2>;
  } else if (tab === "AlumniPortal") {
    return <h2>Alumni Portal Content</h2>;
  }
  return <h2>Welcome to the Admin Panel</h2>;
}

// Sidebar component, independent of the navbar
function Sidebar({ setTab }) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setTab("Dashboard")}>Dashboard</li>
        <li onClick={() => setTab("StudentProfiles")}>Student Profiles</li>
        <li onClick={() => setTab("TutorProfiles")}>Tutor Profiles</li>
        <li onClick={() => setTab("AlumniPortal")}>Alumni Portal</li>
      </ul>
    </div>
  );
}

function Admin() {
  const [tab, setTab] = useState("");

  return (
    <div className="admin-container">

      {/* Content section with Sidebar and PageSection */}
      <div className="main-content">
        <Sidebar setTab={setTab} />
        <div className="page-section">
          <PageSection tab={tab} />
        </div>
      </div>
    </div>
  );
}

export default Admin;