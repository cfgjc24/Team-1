import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menupage">
      {/* Main Section */}
      <div className="introMenu">
        <div className="intro-content-menu">
          <Link to="/student" class="link">
            <button className="nav-button">Student Dashboard</button>
          </Link>
          <Link to="/tutor" class="link">
            <button className="nav-button">Tutor Dashboard</button>
          </Link>
          <Link to="/admin" class="link">
            <button className="nav-button">Admin Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;