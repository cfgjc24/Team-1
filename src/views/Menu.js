import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menupage">
      {/* Main Section */}
      <div className="intro">
        <div className="intro-content">
          <Link to="/student">
            <button className="cta-button">Student</button>
          </Link>
          <Link to="/tutor">
            <button className="cta-button">Tutor</button>
          </Link>
          <Link to="/admin">
            <button className="cta-button">Admin</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;