// src/components/ViewBills.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewBills.css';

const ViewBills = () => {
  const navigate = useNavigate();
  const [billName, setBillName] = useState('');
  const [amount, setAmount] = useState('');
  const [bills, setBills] = useState(JSON.parse(localStorage.getItem('bills')) || []);
  
  const handleAddBill = (e) => {
    e.preventDefault();
    if (billName && amount) {
      const newBill = { name: billName, amount: parseFloat(amount) };
      const updatedBills = [...bills, newBill];
      localStorage.setItem('bills', JSON.stringify(updatedBills));
      setBills(updatedBills);
      setBillName('');
      setAmount('');
    }
  };

  const totalBills = bills.reduce((total, bill) => total + bill.amount, 0);

  return (
    <div className="view-bills-page">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1 className="view-bills-title">View and Add your Monthly Bills</h1>
      <form className="view-bills-form" onSubmit={handleAddBill}>
        <input
          type="text"
          placeholder="Bill Name"
          value={billName}
          onChange={(e) => setBillName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="view-bills-button">Add Bill</button>
      </form>
      <h2>Total Bills: £{totalBills.toFixed(2)}</h2>
      <ul className="bills-list">
        {bills.map((bill, index) => (
          <li key={index}>
            {bill.name}: £{bill.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewBills;
