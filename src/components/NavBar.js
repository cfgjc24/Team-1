import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/Logo.png" alt="Home" className="logo" />  
      </Link>

      <ul className="nav-right">
        <div className="steps-button">
          <Link to="/login">Login</Link>
        </div>
        <div className="login-button">
          <Link to="/create">Create Account</Link>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;