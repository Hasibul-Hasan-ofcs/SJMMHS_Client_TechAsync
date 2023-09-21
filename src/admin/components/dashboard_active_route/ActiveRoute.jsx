import React from "react";
import { NavLink } from "react-router-dom";

const ActiveRoute = ({ to, classes, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `bg-blue-gray-800 rounded-lg text-white ${classes}`
          : `${classes}`
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveRoute;
