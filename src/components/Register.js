
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';  // Make sure your CSS file is linked

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { username, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate('/login');  //Re direct to login after successfull registration
  };

  return (
    <div className="register-page">
      <h1 className="register-title">Expense Tracker</h1>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="register-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
        />
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
