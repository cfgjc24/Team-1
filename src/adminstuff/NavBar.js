import './admin.css';
import React from 'react';
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <div class="navbar-container">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#data">Data</a></li>
      <li><a href="#impact">Impact</a></li>
      <li><a href="#news">News</a></li>
      <li><button id="theme-button">Toggle Dark Mode</button></li>
    </ul>
  </div>
  );
}

export default NavBar;