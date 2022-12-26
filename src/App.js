import { useState } from "react";
import "./App.css";
import Content from "./components/Contents/Content";
import NavBar from "./components/Contents/NavBar";
import About from "./components/Main/About";
import Contact from "./components/Main/Contact";
import Home from "./components/Main/Home";
import Portfolio from "./components/Main/Portfolio";
import Services from "./components/Main/Services";

const LEVELS = {
  home: 0,
  about: 1,
  portfolio: 2,
  services: 3,
  contact: 4,
};

const INNERHEIGHT = window.innerHeight * 0.9;

function App() {
  const [selectedNavBtn, setSelectedNavBtn] = useState("home");
  const handleClick = (btn) => {
    setSelectedNavBtn((prev) => {
      const levelDifference = LEVELS[btn] - LEVELS[prev];

      window.scrollTo({
        behavior: "smooth",
        top:
          INNERHEIGHT *
          (levelDifference < 0
            ? LEVELS[prev] - Math.abs(levelDifference)
            : LEVELS[prev] + levelDifference),
      });

      return btn;
    });
  };

  const handleButtonClick = () => {
    console.log("triggerd");
    window.scrollBy({
      top: window.innerHeight * 0.9,
      behavior: "smooth",
    });
    setSelectedNavBtn("about");
  };

  return (
    <div className="main-container move-page">
      <NavBar clickHandler={handleClick} buttonSelected={selectedNavBtn} />
      <Content>
        <Home clickHandler={handleButtonClick} />
        <About />
        <Portfolio />
        <Services />
        <Contact />
        {/* {selectedNavBtn === "home" && <Home clickHandler={handleButtonClick} />}
        {selectedNavBtn === "about" && <About />}
        {selectedNavBtn === "portfolio" && <Portfolio />}
        {selectedNavBtn === "services" && <Services />}
        {selectedNavBtn === "contact" && <Contact />} */}
      </Content>
    </div>
  );
}

export default App;
