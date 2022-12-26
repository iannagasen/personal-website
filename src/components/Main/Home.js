import React from "react";
import Button from "../UI/Button";
import classes from "./Home.module.css";

const Home = ({ clickHandler }) => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div>Hi, I'm</div>
        <div className={classes.name}>Ian Neil.</div>
        <div className={classes.description}>
          A fullstack software developer
        </div>
      </div>
      <Button clickHandler={clickHandler}>Discover</Button>
    </div>
  );
};

export default Home;
