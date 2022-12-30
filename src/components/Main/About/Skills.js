import React from "react";
import SkillIcons from "./SkillIcons";
import SkillTags from "./SkillTags";
import classes from "./Skills.module.css";

const Skills = ({ className }) => {
  return (
    <div className={`${className} ${classes.container}`}>
      <SkillTags></SkillTags>
      <SkillIcons></SkillIcons>
    </div>
  );
};

export default Skills;
