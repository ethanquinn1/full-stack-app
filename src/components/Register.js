// src/components/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password) {
      // Save the user details to local storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Account created successfully!");
      navigate("/login");
    } else {
      setError("Please provide both a username and a password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-red-500 text-3xl mb-6">Create an Account</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 px-6 py-3 border border-gray-400 rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 px-6 py-3 border border-gray-400 rounded-md"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleRegister}
        className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
      >
        Register
      </button>
    </div>
  );
};

export default Register;
