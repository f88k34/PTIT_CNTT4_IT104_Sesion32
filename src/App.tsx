import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Counter from "./views/Couter";
import Student from "./views/Student";
import ListUser from "./views/ListUser";
import Profile from "./views/Profile";
import Random from "./views/Random";
import ChangeState from "./views/changeState";
import Theme from "./views/Theme";

import Register from "./views/Register";
import Login from "./views/Login";

export default function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <div>
            <Student />
            <Profile />
            <ListUser />
            <Counter />
            <Random />
            <ChangeState />
            <Theme />
          </div>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
