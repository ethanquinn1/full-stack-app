// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Logged in with", email, password);
    navigate("/tracker"); // Navigate to the tracker after successful login
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-red-500 text-3xl mb-4">Login</h1>
      <input
        className="p-2 mb-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="p-2 mb-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-red-500 px-4 py-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
