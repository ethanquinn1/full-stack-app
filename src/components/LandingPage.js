// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-800 text-white space-y-8">
      <h1 className="text-red-500 text-3xl mb-8">Welcome to the Expense Tracker</h1>
      <div className="space-x-4">
        <button
          onClick={handleLoginClick}
          className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
        >
          Login
        </button>
        <button
          onClick={handleRegisterClick}
          className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
