import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLoginClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">NGO Upliftment</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          {!isLoggedIn && (
            <li onClick={onLoginClick} style={{ cursor: 'pointer' }}>
              Login
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
