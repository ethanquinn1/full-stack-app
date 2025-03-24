// src/components/AddExpense.js
import React, { useState } from "react";

const AddExpense = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleAddExpense = () => {
    console.log("Expense Added: ", { description, amount, date });
    alert("Expense added successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-red-500 text-3xl mb-4">Add Expense</h1>
      <input
        className="p-2 mb-2"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="p-2 mb-2"
        type="number"
        placeholder="Amount (£)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        className="p-2 mb-2"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="bg-red-500 px-4 py-2" onClick={handleAddExpense}>
        Add Expense
      </button>
    </div>
  );
};

export default AddExpense;
