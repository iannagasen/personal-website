import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import classes from "./Home.module.css";

const Home = ({ clickHandler }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div>Hi, I'm</div>
        <span className={`${classes.name} name`}>Ian Neil Agasen.</span>
        <div className={classes.description}>
          A fullstack software developer
        </div>
      </div>
      <Button clickHandler={clickHandler}>Discover</Button>
      <Button clickHandler={changeTheme}>Change Theme</Button>
    </div>
  );
};

export default Home;
