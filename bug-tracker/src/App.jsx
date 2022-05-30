import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Containers/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddBug from "./Pages/AddBug/AddBug";

export default function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/AddBug" element={<AddBug />} />
      </Routes>
    </div>
  );
}