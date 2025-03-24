// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      alert('No account found. Please register first.');
      return;
    }

    if (storedUser.username === username && storedUser.password === password) {
      navigate('/tracker'); // Navigate to the Tracker page after successful login
    } else {
      alert('Invalid login details');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen space-y-8 bg-gray-800 text-white">
      <h2 className="text-red-500 text-2xl mb-6">Login</h2>
      <form
        onSubmit={handleLogin}
        className="space-y-6 flex flex-col items-center w-full max-w-md px-6 py-8 bg-gray-900 rounded-lg shadow-lg"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-red-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-red-500"
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
