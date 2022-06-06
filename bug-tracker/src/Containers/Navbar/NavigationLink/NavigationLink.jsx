import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationLink.scss";

export default function NavigationLink({
  location,
  icon,
  text,
  notification,
  displayNotifcation,
  setNotificationValue,
}) {
  // Reset our Notification Back to 0 when clicked.
  const resetNotifications = () => {
    setNotificationValue(0);
  };

  return (
    <NavLink onClick={resetNotifications} className="link-style notification" to={location}>
      <i className={icon}></i>
      <p>{text}</p>
      {displayNotifcation === "true" ? (
        <p className="notifcation">
          <span>{notification}</span>
        </p>
      ) : null}
    </NavLink>
  );
}
