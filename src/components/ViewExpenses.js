// src/components/ViewExpenses.js
import React from "react";

const ViewExpenses = () => {
  const expenses = [
    { description: "Groceries", amount: 20.5, date: "2025-03-21" },
    { description: "Transport", amount: 15.0, date: "2025-03-20" },
    { description: "Entertainment", amount: 50.0, date: "2025-03-19" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-red-500 text-3xl mb-6">View Expenses</h1>
      <div className="table-container">
        <table className="table-auto border-collapse border border-gray-500 w-full text-center">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Description</th>
              <th className="border border-gray-400 px-4 py-2">Amount (£)</th>
              <th className="border border-gray-400 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">{expense.description}</td>
                <td className="border border-gray-400 px-4 py-2">{expense.amount}</td>
                <td className="border border-gray-400 px-4 py-2">{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewExpenses;
