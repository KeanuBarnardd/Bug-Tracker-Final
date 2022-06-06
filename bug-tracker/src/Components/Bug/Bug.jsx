import React from "react";
import IconButton from "../IconButton/IconButton";

import "./Bug.scss";

export default function Bug({ title, description, steps, version, date, bugData ,getPriorityHandler, resolveBugHandler}) {
  return (
    <div className={`bug ${getPriorityHandler(bugData)}`}>
      <div className="title-version">
        <h1>{title}</h1>
        <span>
          <p>Version: {version}</p>
        </span>
      </div>
      <h3>Description</h3>
      <p className="bug-text">{description}</p>
      <h3>Steps</h3>
      <p className="bug-text">{steps}</p>
      <div className="bottom-container">
        <div className="button-container">
          <IconButton icon="fa-solid fa-pen-to-square" text="Edit" />
          <IconButton icon="fa-solid fa-check" buttonClick={(e)=> resolveBugHandler(bugData.id)} text="Resolve" />
        </div>
        <span>
          <p>{date}</p>
        </span>
      </div>
    </div>
  );
}
