
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'; 
import Login from './components/Login';
import Register from './components/Register';
import Tracker from './components/Tracker'; 
import AddExpense from './components/AddExpense';
import ViewExpenses from './components/ViewExpenses';
import Account from './components/Account';
import ViewBills from './components/ViewBills'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/view-expenses" element={<ViewExpenses />} />
        <Route path="/account" element={<Account />} />
        <Route path="/view-bills" element={<ViewBills />} /> 
      </Routes>
    </Router>
  );
};

export default App;
