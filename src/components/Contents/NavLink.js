import React from "react";

import classes from "./NavLink.module.css";

const NavLink = ({ clickHandler, className, name, buttonSelected }) => {
  const handleClick = () => {
    clickHandler(name);
  };
  return (
    <li
      className={`${classes.li} ${className} ${
        buttonSelected === name && classes.selected
      }`}
      onClick={handleClick}
    >
      {name}
    </li>
  );
};

export default NavLink;
