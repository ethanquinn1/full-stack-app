import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddExpense.css';

const AddExpense = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleAddExpense = (e) => {
    e.preventDefault();
    const newExpense = { description, amount, date };
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(newExpense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    navigate('/view-expenses');  // Redirect to view expenses page
  };

  return (
    <div className="add-expense-page">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1 className="add-expense-title">Add your expenses here</h1>
      <form className="add-expense-form" onSubmit={handleAddExpense}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="add-expense-input"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="add-expense-input"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="add-expense-input"
        />
        <button type="submit" className="add-expense-button">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
