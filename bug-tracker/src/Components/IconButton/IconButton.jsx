import React from "react";

import "./IconButton.scss";

export default function IconButton({ icon, text , type}) {
  return (
    <div className={`icon-btn ${type}`}>
      <i className={icon}></i>
      <p>{text}</p>
    </div>
  );
}
