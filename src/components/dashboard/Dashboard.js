import React from 'react';
import LineChartComponent from './LineChartComponent';
import PieChartComponent from './PieChartComponent';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="main-content">
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