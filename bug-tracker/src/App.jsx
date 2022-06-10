import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Containers/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddBug from "./Pages/AddBug/AddBug";
import Profile from "./Pages/Profile/Profile";
import Settings from "./Pages/Settings/Settings";
import EditBug from "./Pages/EditBug/EditBug";
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
  const [bugSaved, setBugSaved] = useState({
    title: "",
    description: "",
    steps: "",
    priority: "low",
    date: "00/00/00",
    version: "0",
    id: "",
  });

  const [bugDataCount, setBugDataCount] = useState({
    low: 0,
    medium: 0,
    high: 0,
    resolved: 0,
  });
  const [resolvedBugs, setResolvedBugs] = useState([]);

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

  const editBugHandler = (bugData) => {
    setBug({
      title: bugData.title,
      description: bugData.description,
      steps: bugData.steps,
      priority: bugData.priority,
      date: bugData.date,
      version: bugData.version,
      id: bugData.id,
    });

    // Save these values so if our user decides to cancel we will just restore
    setBugSaved({
      title: bugData.title,
      description: bugData.description,
      steps: bugData.steps,
      priority: bugData.priority,
      date: bugData.date,
      version: bugData.version,
      id: bugData.id,
    });
  };

  const confirmEdit = (bug) => {
    console.log("Edits have been changed");
    console.log(bug.id);
    deleteBug(bug.id);
    console.log(bug.id);
  };

  const cancelEdit = (bug) => {
    console.log("Edits have been canceled");
    console.log(bug.id);
    deleteBug(bug.id);
    console.log(bug.id);
  };

  const deleteBug = (bugData) => {
    console.log("Delete Bug");
    let newList = bugList;
    newList.splice(getBugIndex(bugData.id), 1);
    setBugList([...newList]);
  };

  const resolveBugHandler = (bugData, status) => {
    alert("Are you sure you want to resolve bug");
    // Update our Resolved Bug List....
    const resolveDate = getDate();
    // Add Bug to resolvedList
    setResolvedBugs((resolvedBugs) => [
      ...resolvedBugs,
      {
        title: bugData.title,
        date: resolveDate,
        id: bugData.id,
      },
    ]);

    // Update our Bug List...
    deleteBug(bugData.id);
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
    // Clear the intervel when timer runs out
    return () => {
      clearTimeout(popUpRef.current);
    };
  }, []);

  return (
    <div className="app">
      <Navbar
        setNotificationValue={setNotificationValue}
        notificationValue={notificationValue}
        displayNotifcation={displayNotification}
        setDisplayNotification={setDisplayNotification}
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
              editBugHandler={editBugHandler}
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
        <Route
          path="/Profile"
          element={<Profile bugDataCount={bugDataCount} resolvedBugs={resolvedBugs} />}
        />
        <Route path="/Settings" element={<Settings />} />
        <Route
          path="/EditBug"
          element={
            <EditBug
              bug={bug}
              getInputHandler={getInputHandler}
              getPriorityHandler={getPriorityHandler}
              confirmEdit={confirmEdit}
              cancelEdit={cancelEdit}
              setBugSaved={setBugSaved}
              bugSaved={bugSaved}
            />
          }
        />
      </Routes>
    </div>
  );
}

// EXTERNAL FUNCTIONS
const generateRandomId = () => {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 20; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

const getDate = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return today;
};
