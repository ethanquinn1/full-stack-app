// src/components/ViewExpenses.js
import React, { useState, useEffect } from 'react';
import './ViewExpenses.css';

const ViewExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  const handleRemoveExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  return (
    <div className="view-expenses-page">
      <h1 className="view-expenses-title">Expense Tracker</h1>
      {expenses.length > 0 ? (
        <table className="expenses-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount (£)</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.description}</td>
                <td>£{expense.amount}</td>
                <td>{expense.date}</td>
                <td>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveExpense(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No expenses recorded yet.</p>
      )}
    </div>
  );
};

export default ViewExpenses;
