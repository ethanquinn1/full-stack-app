
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';  // Make sure your CSS file is linked

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="landing-title">Expense Tracker</h1>
      <div className="button-container">
        <Link to="/login">
          <button className="landing-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="landing-button">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
