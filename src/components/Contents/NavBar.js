import React from "react";
import classes from "./NavBar.module.css";
import NavLink from "./NavLink";

const NavBar = ({ clickHandler, buttonSelected }) => {
  const props = {
    className: classes.button,
    clickHandler: clickHandler,
    buttonSelected: buttonSelected,
  };

  return (
    <div className={classes.sticky}>
      <nav className={`${classes.nav}`}>
        <div className={classes.logo}>Some Logo</div>
        <ul>
          <NavLink name="home" {...props} />
          <NavLink name="about" {...props} />
          <NavLink name="portfolio" {...props} />
          <NavLink name="services" {...props} />
          <NavLink name="contact" {...props} />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
