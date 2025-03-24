// src/components/Tracker.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Tracker.css';

const Tracker = () => {
  return (
    <div className="tracker-page">
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
