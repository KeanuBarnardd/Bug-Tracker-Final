import React from "react";

import "./IconButton.scss";

export default function IconButton({ icon, text }) {
  return (
    <div className="icon-btn">
      <i className={icon}></i>
      <p>{text}</p>
    </div>
  );
}
