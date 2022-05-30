import React from "react";
import { Link } from "react-router-dom";
import IconButton from "../../Components/IconButton/IconButton";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="nav">
      <h1>This is the navbar</h1>
      <Link to="/">
        <IconButton text={"Dashboard"}/>
      </Link>
      <Link to="addBug">
        <IconButton text={"Create Bug"}/>
      </Link>
    </div>
  );
}
