// src/components/Account.js
import React from "react";

const Account = () => {
  const userName = "John Doe"; // Placeholder for user's name
  const averageDailySpending = 25.5; // Placeholder for daily average spending
  const averageWeeklySpending = 180.0; // Placeholder for weekly average spending
  const averageMonthlySpending = 720.0; // Placeholder for monthly average spending

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-red-500 text-3xl mb-4">Account</h1>
      <div className="mb-4">
        <h2 className="text-white text-xl">User: {userName}</h2>
        <p className="text-white">Average Daily Spending: £{averageDailySpending}</p>
        <p className="text-white">Average Weekly Spending: £{averageWeeklySpending}</p>
        <p className="text-white">Average Monthly Spending: £{averageMonthlySpending}</p>
      </div>
    </div>
  );
};

export default Account;
