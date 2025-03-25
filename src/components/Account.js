import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Account.css';

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [averageSpendingPerDay, setAverageSpendingPerDay] = useState(0);
  const [averageSpendingPerWeek, setAverageSpendingPerWeek] = useState(0);
  const [averageSpendingPerMonth, setAverageSpendingPerMonth] = useState(0);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')) || {};
    setUser(storedUser);

    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];

    if (storedExpenses.length > 0) {
      const today = new Date();
      const oneDay = 1000 * 60 * 60 * 24; 
      const oneWeek = oneDay * 7;
      const oneMonth = oneDay * 30; 

      const filteredExpenses = storedExpenses.map(expense => ({
        ...expense,
        date: new Date(expense.date),
      }));

      const totalSpending = filteredExpenses.reduce(
        (total, expense) => total + parseFloat(expense.amount),
        0
      );

      //Calculates spending per day
      const firstExpenseDate = new Date(Math.min(...filteredExpenses.map(exp => exp.date.getTime())));
      const totalDays = Math.max(1, Math.ceil((today - firstExpenseDate) / oneDay));
      setAverageSpendingPerDay(totalSpending / totalDays);

      // Calculate spending per week
      const totalWeeks = Math.max(1, Math.ceil(totalDays / 7));
      setAverageSpendingPerWeek(totalSpending / totalWeeks);

      // Calculate spending per month
      const totalMonths = Math.max(1, Math.ceil(totalDays / 30));
      setAverageSpendingPerMonth(totalSpending / totalMonths);
    }
  }, []);

  return (
    <div className="account-page">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1 className="account-title">Your Average Spending Excluding Monthly Bills</h1>
      <div className="account-info">
        <h2>{user.username}</h2>
        <p>Average Spending Per Day: £{averageSpendingPerDay.toFixed(2)}</p>
        <p>Average Spending Per Week: £{averageSpendingPerWeek.toFixed(2)}</p>
        <p>Average Spending Per Month: £{averageSpendingPerMonth.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Account;
