import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome">
      <h2>Welcome to the Survey</h2>
      <p>Let's collect some data to help the poor uplift their lives.</p>
      <Link to="/survey">
        <button className="start-survey">Start Survey</button>
      </Link>
    </div>
  );
};

export default Welcome;
