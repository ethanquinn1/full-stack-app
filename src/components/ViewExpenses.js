import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewExpenses.css';

const ViewExpenses = () => {
  const navigate = useNavigate();
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
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1 className="view-expenses-title">Here is your saved expenses</h1>
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
              <td>£{parseFloat(expense.amount).toFixed(2)}</td>
              <td>{expense.date}</td>
              <td>
                <button className="remove-button" onClick={() => handleRemoveExpense(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewExpenses;
