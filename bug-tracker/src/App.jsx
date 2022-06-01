import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Containers/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddBug from "./Pages/AddBug/AddBug";
import Profile from "./Pages/Profile/Profile";
import Settings from "./Pages/Settings/Settings";
import "./Styles/general.scss";

export default function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/AddBug" element={<AddBug />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
