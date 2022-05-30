import React from "react";
import NavigationLink from "./NavigationLink/NavigationLink";

import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <h3>
          <i className="fa-solid fa-bug"></i> Bug Tracker
        </h3>
        <NavigationLink location="/" text="Dashboard" icon="fa-solid fa-table-columns" />
        <NavigationLink location="Profile" text="Profile" icon="fa-solid fa-user" />
        <NavigationLink location="addBug" text="Add" icon="fa-solid fa-circle-plus" />
        <NavigationLink location="settings" text="settings" icon="fa-solid fa-gear" />
      </div>
      <div className="nav-top">
        <p>Keanu Barnard</p>
      </div>
    </div>
  );
}
