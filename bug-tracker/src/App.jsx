import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Containers/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddBug from "./Pages/AddBug/AddBug";
import Profile from "./Pages/Profile/Profile";
import Settings from "./Pages/Settings/Settings";
import "./Styles/general.scss";

export default function App() {
  const [bug, setBug] = useState({
    title: "",
    description: "",
    steps: "",
    priority: "low",
    date: "00/00/00",
    version: "0",
  });

  const getInputHandler = (type) => (e) => {
    setBug((bug) => ({
      ...bug,
      [type]: e.target.value,
    }));
  };

  const createBugHandler = (e) => {
    e.preventDefault();
    setBug();
    console.log(bug);
  };

  const getPriorityHandler = (i) => {
    if (i.priority === "low") {
      return "low";
    } else if (i.priority === "medium") {
      return "medium";
    } else {
      return "high";
    }
  };

  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/AddBug"
          element={
            <AddBug
              bug={bug}
              getPriorityHandler={getPriorityHandler}
              createBugHandler={createBugHandler}
              getInputHandler={getInputHandler}
            />
          }
        />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
