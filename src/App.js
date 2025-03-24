// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Import the new LandingPage component
import Login from './components/Login';
import Register from './components/Register';
import Tracker from './components/Tracker'; // Assuming you have other components like Tracker
import AddExpense from './components/AddExpense';
import ViewExpenses from './components/ViewExpenses';
import Account from './components/Account';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Landing Page Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tracker" element={<Tracker />} /> {/* Tracker page where user can navigate */}
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/view-expenses" element={<ViewExpenses />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;
