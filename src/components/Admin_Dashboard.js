import React from 'react';
import Sidebar from './SideBar';
import LineChartComponent from './LineChartComponent';
import PieChartComponent from './PieChartComponent';
import './Dashboard.css'; // Custom styles
import NavBarAdmin from './NavBarAdmin';
function Dashboard() {
  return (
    <div className="dashboard-container">
      <NavBarAdmin />
      <div className="main-content">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-grid">
          <div className="card">
            <h5>Students Activities</h5>
            <LineChartComponent />
          </div>
          <div className="card">
            <h5>Statistics</h5>
            <PieChartComponent />
          </div>
          <div className="card">
            <h5>Assigned Risks</h5>
            <p>There are no risks assigned.</p>
          </div>
          <div className="card">
            <h5>Upcoming Meetups</h5>
            <p>No meetups assigned.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
