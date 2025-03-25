// src/components/Account.js
import React, { useState, useEffect } from 'react';
import './Account.css';

const Account = () => {
  const [user, setUser] = useState(null);  // Set initial state to null
  const [averageSpending, setAverageSpending] = useState(0);
  const [isLoading, setIsLoading] = useState(true);  // New state to track loading status

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log("Stored User:", storedUser);  // Debugging: Check if user data is retrieved correctly

    if (storedUser) {
      setUser(storedUser);
    } else {
      console.warn("No user data found in localStorage.");
    }

    // Fetch expenses data from localStorage
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    console.log("Stored Expenses:", storedExpenses);  // Debugging: Check if expenses are retrieved correctly

    // Calculate total spending
    const totalSpending = storedExpenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    console.log("Total Spending:", totalSpending);  // Debugging: Check total spending calculation

    // Calculate average spending
    const avgSpending = storedExpenses.length > 0 ? totalSpending / storedExpenses.length : 0;
    console.log("Average Spending:", avgSpending);  // Debugging: Check average spending calculation

    setAverageSpending(avgSpending);
    setIsLoading(false);  // Mark loading as finished
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;  // Show a loading message while data is being fetched
  }

  return (
    <div className="account-page">
      <h1 className="account-title">Expense Tracker</h1>
      <div className="account-info">
        {user ? (
          <>
            <h2>{user.username}</h2>
            <p>Average Spending: ${averageSpending.toFixed(2)}</p>
          </>
        ) : (
          <p>No user data available. Please log in again.</p>  // Message if no user data
        )}
      </div>
    </div>
  );
};

export default Account;
