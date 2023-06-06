import React, { useState } from 'react';
import './App.css';
import SurveyForm from './SurveyForm';
import LoginPage from './LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <header>
        <h1>Muslim Welfare Association</h1>
        <nav>
          <ul>
            <li className="active"><a href="index.html">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Programs</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#" onClick={openLogin}>Login</a></li>
          </ul>
        </nav>
      </header>

      {isLoggedIn ? (
        <LoginPage />
      ) : (
        <>
          <SurveyForm />

          <div id="aboutSection" className="container">
            <h2>About the NGO</h2>
            <p>The NGO is dedicated to improving the living conditions of impoverished communities. Through our various programs and initiatives, we aim to address issues such as education, healthcare, skill development, and sustainable livelihoods.</p>
            <p>Your participation in the survey will enable us to better understand the needs and challenges faced by the underprivileged and design effective interventions to uplift their lives.</p>
          </div>

          <footer>
            &copy; 2023 Muslim Welfare Association. All rights reserved.
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
