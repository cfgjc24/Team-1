import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Main Section */}
      <div className="intro">
        <div className="intro-content">
          <Link to="/login">
            <button className="cta-button">Login</button>
          </Link>
          <Link to="/create">
            <button className="cta-button">Create new account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;