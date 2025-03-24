// src/components/ViewExpenses.js
import React, { useEffect, useState } from "react";

const ViewExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  // Fetch expenses from localStorage when the component mounts
  useEffect(() => {
    // Get expenses from localStorage
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <h2 className="text-red-500 text-2xl mb-6">View Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet!</p>
      ) : (
        <table className="table-auto border-collapse border border-gray-500">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-500">Description</th>
              <th className="px-4 py-2 border border-gray-500">Amount (£)</th>
              <th className="px-4 py-2 border border-gray-500">Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-gray-500">{expense.description}</td>
                <td className="px-4 py-2 border border-gray-500">{expense.amount}</td>
                <td className="px-4 py-2 border border-gray-500">{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewExpenses;
