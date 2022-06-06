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
  isNotif,
}) {
  // Reset our Notification Back to 0 when clicked.
  const resetNotifications = () => {
    setNotificationValue(0);
  };

  return (
    <NavLink
      onClick={isNotif ? resetNotifications : null}
      className="link-style notification"
      to={location}
    >
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
