import React, { useState, useEffect, useRef } from "react";
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
  const [bugDataCount, setBugDataCount] = useState({
    low: 0,
    medium: 0,
    high: 0,
    resolved: 0,
  });

  // Notification & Popup States
  const [displayNotification, setDisplayNotification] = useState("false");
  const [notificationValue, setNotificationValue] = useState(0);
  const [displayPopup, setDisplayPopup] = useState(false);
  const popUpRef = useRef(null);

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
      return index;
    } else {
      return console.error("Cannot find Bug ID");
    }
  };

  const resolveBugHandler = (id, status) => {
    let newList = bugList;
    newList.splice(getBugIndex(id), 1);
    setBugList([...newList]);
    updateCount(status, true);
    updateCount("resolved", false);
  };

  const createBugHandler = (priority) => (e) => {
    e.preventDefault();
    setBug((bug) => ({
      ...bug,
      id: generateRandomId(),
    }));
    // Display that we have created our bug
    displayPopupHandler();
    // Check & Update notification value,
    setNotificationValue(notificationValue + 1);
    //update all count values & add bug to bug list.
    updateCount(priority, false);
    setBugList((bugList) => [...bugList, bug]);
  };

  const updateNotifcationHandler = () => {
    if (notificationValue === 0 || notificationValue < 0) {
      setDisplayNotification("false");
    } else {
      setDisplayNotification("true");
    }
  };

  const displayPopupHandler = () => {
    setDisplayPopup(true);
    popUpRef.current = setTimeout(() => {
      setDisplayPopup(false);
    }, 3000);
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

  const updateCount = (status, remove) => {
    if (remove) {
      setBugDataCount((bugData) => ({
        ...bugData,
        [status]: bugData[status] - 1,
      }));
    } else {
      setBugDataCount((bugData) => ({
        ...bugData,
        [status]: bugData[status] + 1,
      }));
    }
  };

  useEffect(() => {
    // Update our notification Value
    updateNotifcationHandler();
    // Clear the intervel when timer runs out

    return () => clearTimeout(popUpRef.current);
  }, []);

  return (
    <div className="app">
      <Navbar
        setNotificationValue={setNotificationValue}
        notificationValue={notificationValue}
        displayNotifcation={displayNotification}
      ></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              bugList={bugList}
              getPriorityHandler={getPriorityHandler}
              generateRandomId={generateRandomId}
              resolveBugHandler={resolveBugHandler}
              updateCount={updateCount}
              bugDataCount={bugDataCount}
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
              displayPopup={displayPopup}
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
