// Account.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Account.css';

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [averageSpending, setAverageSpending] = useState(0);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }

    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const totalSpending = storedExpenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    const avgSpending = storedExpenses.length ? totalSpending / storedExpenses.length : 0;
    setAverageSpending(avgSpending);
  }, []);

  if (!user) {
    return <div className="account-page"><h2>No user data found. Please log in.</h2></div>;
  }

  return (
    <div className="account-page">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1 className="account-title">Expense Tracker</h1>
      <div className="account-info">
        <h2>{user.username || 'Guest'}</h2>
        <p>Average Spending: £{averageSpending.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Account;
