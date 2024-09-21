import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/Logo.png" alt="Home" className="logo" />  
      </Link>

      <ul className="nav-right">
        {isLoggedIn && (
          <>
            <div className="logout-button">
            <Link onClick={() => setIsLoggedIn(false)} to= "/">Logout</Link>
            </div>
          </>
        )}
        {!isLoggedIn && (
          <>
            <div className="login-button">
            <Link onClick={() => setIsLoggedIn(true)}to="/login">Login</Link>
            </div>
            <div className="create-button">
              <Link to="/create">Create Account</Link>
            </div>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;