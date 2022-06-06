import React from "react";

import "./PopUp.scss";

export default function PopUp({ displayPopUp }) {
  if (!displayPopUp) {
    console.log("Pop up is not being displayed");
    return null;
  }

  return !displayPopUp ? null : (
    <div className="pop-up">
      <p>
        <i className="fa-solid fa-check"></i> Bug has been created
      </p>
    </div>
  );
}
