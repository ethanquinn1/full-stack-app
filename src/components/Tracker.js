// src/components/Tracker.js
import React from 'react';
import { Link } from 'react-router-dom';

const Tracker = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-800 text-white space-y-8">
      <h2 className="text-red-500 text-3xl mb-8">Welcome to the Expense Tracker</h2>

      {/* Navigation Links */}
      <div className="space-y-4">
        <Link
          to="/add-expense"
          className="block px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 text-center"
        >
          Add Expense
        </Link>

        <Link
          to="/view-expenses"
          className="block px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 text-center"
        >
          View Expenses
        </Link>

        <Link
          to="/account"
          className="block px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 text-center"
        >
          View Account
        </Link>
      </div>
    </div>
  );
};

export default Tracker;
