// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Tracker from "./components/Tracker";
import AddExpense from "./components/AddExpense";
import ViewExpenses from "./components/ViewExpenses";
import Account from "./components/Account";

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tracker" element={<Tracker />}>
            <Route path="add-expense" element={<AddExpense />} />
            <Route path="view-expenses" element={<ViewExpenses />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
