import React from "react";
import { IconContext } from "react-icons";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <div>Contact Section</div>
      <AiFillLinkedin
        className={classes.icon}
        onClick={() =>
          window.open("https://www.linkedin.com/in/ian-neil-agasen-64236a189/")
        }
      />
      <BsGithub
        className={classes.icon}
        onClick={() => window.open("https://github.com/iannagasen")}
      />
    </div>
  );
};

export default Contact;
