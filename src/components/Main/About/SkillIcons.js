import React, { useState } from "react";
import {
  SiAmazonaws,
  SiApachemaven,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiHibernate,
  SiJava,
  SiJavascript,
  SiJenkins,
  SiJquery,
  SiMysql,
  SiPython,
  SiSpring,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import classes from "./SkillIcons.module.css";
import { FaGitAlt, FaReact } from "react-icons/fa";
import Button from "../../UI/Button";

const SKILL_ICONS = [
  <SiSpring />,
  <SiSpringboot />,
  <SiHibernate />,
  <SiJava />,
  <SiMysql />,
  <SiJavascript />,
  <SiTypescript></SiTypescript>,
  <FaReact></FaReact>,
  <SiPython></SiPython>,
  <SiCss3></SiCss3>,
  <SiBootstrap></SiBootstrap>,
  <SiAmazonaws></SiAmazonaws>,
  <SiJquery></SiJquery>,
  <SiApachemaven></SiApachemaven>,
  <FaGitAlt></FaGitAlt>,
  <SiJenkins></SiJenkins>,
  <SiDocker></SiDocker>,
];

const SkillIcons = () => {
  const [icons, setIcons] = useState(SKILL_ICONS);
  const shuffle = () => {
    setIcons((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  return (
    <div className={classes.icons}>
      {icons.map((icon, i) => (
        <div key={i} style={{ "--i": i }}>
          {icon}
        </div>
      ))}
      <Button clickHandler={shuffle}>Click me</Button>
    </div>
  );
};

export default SkillIcons;
