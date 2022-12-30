import React from "react";
import classes from "./About.module.css";
import AboutMe from "./About/AboutMe";
import Skills from "./About/Skills";

const About = () => {
  return (
    <div className={classes.container}>
      <AboutMe className={classes.firstItem}></AboutMe>
      <Skills className={classes.secondItem}></Skills>
    </div>
  );
};

export default About;
