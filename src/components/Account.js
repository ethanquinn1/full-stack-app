// src/components/Account.js
import React, { useState, useEffect } from 'react';
import './Account.css';

const Account = () => {
  const [user, setUser] = useState({});
  const [averageSpending, setAverageSpending] = useState(0);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')) || {};
    setUser(storedUser);

    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const totalSpending = storedExpenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    const avgSpending = storedExpenses.length ? totalSpending / storedExpenses.length : 0;
    setAverageSpending(avgSpending);
  }, []);

  return (
    <div className="account-page">
      <h1 className="account-title">Expense Tracker</h1>
      <div className="account-info">
        <h2>{user.username}</h2>
        <p>Average Spending: ${averageSpending.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Account;
