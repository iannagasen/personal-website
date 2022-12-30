import React from "react";

import classes from "./AboutMe.module.css";

const AboutMe = ({ className }) => {
  const classList = [classes.container, className];
  return (
    <section className={classList.join(" ")}>
      <header>Get to know me</header>
      <p>
        I'm a Full Stack Web Developer in the Philippines building the Back and
        Front-end of Websites and Web Applications that leads to the success of
        the overall product.
      </p>
      <p>
        Problem-solver, analytical thinker and a well-organized developer who
        likes to play chess keme keme
      </p>
      <p>
        I'm open to job and freelance opportunites where I can contribute, learn
        and grow. If you have a good opportunity that matches my skills and
        experience then don't hesitate to contact me.
      </p>
      <p>Let's build something!</p>
    </section>
  );
};

export default AboutMe;
