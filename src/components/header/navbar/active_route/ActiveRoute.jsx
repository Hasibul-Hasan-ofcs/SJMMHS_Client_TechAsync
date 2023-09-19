import React from "react";
import { NavLink } from "react-router-dom";

const ActiveRoute = ({ to, classes, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `active ${classes}` : `${classes}`
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveRoute;
