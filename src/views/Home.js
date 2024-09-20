import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Main Section */}
      <div className="intro">
        <div className="intro-content">
            <h1>First Generation Investors</h1>
            <p>Get started today!</p>
          <Link to="/login">
            <button className="cta-button">Login</button>
          </Link>
          <Link to="/create">
            <button className="cta-button">Create Account</button>
          </Link>
        </div>
      </div>

      <div className="features">
        <h2>Key Information</h2>
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

export default HomePage;