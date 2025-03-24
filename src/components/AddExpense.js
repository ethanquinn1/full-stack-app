// src/components/AddExpense.js
import React, { useState } from 'react';

const AddExpense = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      description,
      amount,
      date,
    };

    // Get existing expenses from localStorage
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(newExpense);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Reset the form
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen space-y-8 bg-gray-800 text-white">
      <h2 className="text-red-500 text-2xl mb-6">Add Expense</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 flex flex-col items-center w-full max-w-md px-6 py-8 bg-gray-900 rounded-lg shadow-lg"
      >
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-red-500"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-red-500"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-red-500"
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
