import React from "react";

import "./PopUp.scss";

export default function PopUp({ displayPopup }) {
  if(!displayPopup){
    return null;
  }

  return (
    <div className="pop-up">
      <p>
        <i className="fa-solid fa-check"></i> Bug has been created
      </p>
    </div>
  );
}
