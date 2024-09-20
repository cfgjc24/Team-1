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

      <div className="features">
        <h2>Name</h2>
        <div className="features-list">
          <div className="feature">
            <h3>OUR MISSION</h3>
            <p>We are a non-profit 501(c)3 organization that teaches high school students the power of investing, and brings classroom lessons to life by providing students with real money to invest.</p>
          </div>
          <div className="feature">
            <h3>STUDENTS</h3>
            <p>2700+</p>
          </div>
          <div className="feature">
            <h3>Feature 3</h3>
            <p>Lorem ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;