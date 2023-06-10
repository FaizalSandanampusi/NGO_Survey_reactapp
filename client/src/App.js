import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import './App.css';
import Welcome from './components/Welcome';
import Survey from './components/Survey';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Upliftment for Poor NGO</h1>
        </header>

        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
            </div>
            <div className="navbar-links">
              {!isLoggedIn ? (
                <>
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/login">Login</Link>
                </>
              ) : (
                <>
                  <Link to="/" onClick={handleLogoutClick}>
                    Logout
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLoginClick} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/survey" element={<Survey />} />
          </Routes>
        </div>
      <footer className="footer">
          <div className="footer-container">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Upliftment of Poor Program. All rights reserved.
            </p>
            <p className="footer-text">Designed and developed by Muslim Welfare Association</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
