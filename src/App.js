// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Tracker from "./components/Tracker";
import Landing from "./components/Landing";
import AddExpense from "./components/AddExpense"; // AddExpense component
import ViewExpenses from "./components/ViewExpenses"; // ViewExpenses component
import Account from "./components/Account"; // Account component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tracker" element={<Tracker />}>
          <Route path="add-expense" element={<AddExpense />} />
          <Route path="view-expenses" element={<ViewExpenses />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
