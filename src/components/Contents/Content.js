import React from "react";

import classes from "./Content.module.css";

const Content = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Content;
