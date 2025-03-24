// src/components/Tracker.js
import React from "react";
import { Link, Outlet } from "react-router-dom"; // Outlet used for nested routes

const Tracker = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <h1 className="text-red-500 text-3xl mb-6">Expense Tracker</h1>
      
      <nav className="flex space-x-4">
        <Link
          to="add-expense" // Correct path for the AddExpense component
          className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
        >
          Add Expense
        </Link>
        <Link
          to="view-expenses" // Correct path for the ViewExpenses component
          className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
        >
          View Expenses
        </Link>
        <Link
          to="account" // Correct path for the Account component
          className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
        >
          View Account
        </Link>
      </nav>

      {/* Render the selected route content */}
      <Outlet />
    </div>
  );
};

export default Tracker;
