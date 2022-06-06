import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Containers/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddBug from "./Pages/AddBug/AddBug";
import Profile from "./Pages/Profile/Profile";
import Settings from "./Pages/Settings/Settings";
import "./Styles/general.scss";

export default function App() {
  const [bugList, setBugList] = useState([]);
  const [bug, setBug] = useState({
    title: "",
    description: "",
    steps: "",
    priority: "low",
    date: "00/00/00",
    version: "0",
    id: generateRandomId(),
  });

  const getInputHandler = (type) => (e) => {
    setBug((bug) => ({
      ...bug,
      [type]: e.target.value,
    }));
  };

  const getBugIndex = (id) => {
    let index = bugList.findIndex((bug) => {
      return bug.id === id;
    });
    if (index !== -1) {
      console.log(" WE HAVE A MATCH ");
      return index;
    } else {
      return console.error("Cannot find Bug ID");
    }
  };

  const resolveBugHandler=(id)=>{
    let newList = bugList; 
    newList.splice(getBugIndex(id),1);
    setBugList([...newList]);
  }

  const createBugHandler = (e) => {
    e.preventDefault();
    // Generate our ID when we create this bug...
    setBug((bug) => ({
      ...bug,
      id: generateRandomId(),
    }));
    // Add our bug to our list of bugs
    setBugList((bugList) => [...bugList, bug]);
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
        <Route
          path="/"
          element={
            <Dashboard
              bugList={bugList}
              getPriorityHandler={getPriorityHandler}
              generateRandomId={generateRandomId}
              resolveBugHandler={resolveBugHandler}
            />
          }
        />
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

const generateRandomId = () => {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 20; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};
