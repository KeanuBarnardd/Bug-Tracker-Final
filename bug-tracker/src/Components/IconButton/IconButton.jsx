import React from "react";

import "./IconButton.scss";

export default function IconButton({ icon, text , type, buttonClick}) {
  return (
    <button onClick={buttonClick} className={`icon-btn ${type}`}>
      <i className={icon}></i>
      <p>{text}</p>
    </button>
  );
}
