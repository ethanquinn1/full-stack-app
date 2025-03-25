import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Tracker.css';

const Tracker = () => {
  const navigate = useNavigate();

  return (
    <div className="tracker-page">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1 className="tracker-title">Expense Tracker</h1>
      <div className="tracker-buttons">
        <Link to="/add-expense" className="tracker-button">Add Expense</Link>
        <Link to="/view-expenses" className="tracker-button">View Expenses</Link>
        <Link to="/view-account" className="tracker-button">View Account</Link>
      </div>
    </div>
  );
};

export default Tracker;
