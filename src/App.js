import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import AboutUs from './AboutUs';
import './App.css';
import Welcome from './Welcome';
import Survey from './Survey';

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
        {!isLoggedIn && (
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </nav>
        )}

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLoginClick} />} />
            <Route path="/about" element={<AboutUs />} />
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Welcome />} />
                <Route path="/survey" element={<Survey />} />
              </>
            ) : (
              <Route path="/" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
