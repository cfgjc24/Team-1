import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Main Section */}
      <div className="intro">
        <div className="intro-content">
            <h1 className="main-page-title">FIRST GENERATION INVESTORS</h1>
            <p>Inspiring students to own their financial futures</p>
        </div>
      </div>

      <div className="information">
        <h2 className="heading">Our Mission</h2>
        <h3 className="paragraph">First Generation Investors (FGI) is a non-profit 501(c)3 organization that teaches high school
            <br></br>students the power of investing, and brings classroom lessons to life by providing students with <strong>real money to invest.</strong></h3>
      </div>
    </div>
  );
};

export default HomePage;