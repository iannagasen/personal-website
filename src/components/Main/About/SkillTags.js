import React from "react";

import classes from "./SkillTags.module.css";

// prettier-ignore
const SKILLS = {
  1: ["Java", "React", "Spring", "Spring Boot",],
  2: ["JavaScript", "TypeScript", "CSS",],
  3: ["BootStrap", "Git", "GitHub", ],
  4: ["Amazon Web Services",],
  5: ["Microservices",],
  6: ["RestAPI", "SQL",],
  7: ["HTML", "Python", "C",],
  8: ["Restful Web Services",],
  9: ["jQuery", "Maven", "PL/SQL"],
}

const SkillTags = ({ className, children }) => {
  return (
    <div className={`${classes.skillTags} `}>
      {Object.values(SKILLS).map((skillsLine) => (
        <div className={classes.innerFlex}>
          {skillsLine.map((skill) => (
            <div
              className={`${classes.skill} ${classes[randomColorStyleClass()]}`}
            >
              {skill}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const randomColorStyleClass = () => {
  const randomNo = 1 + Math.floor(Math.random() * 3);
  return `randomColor${randomNo}`;
};

export default SkillTags;
