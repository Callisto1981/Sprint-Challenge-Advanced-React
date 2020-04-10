import React from "react";
import useDarkMode from "../Hooks/useDarkMode";

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav id="navbar" className="navbar">
      <div className="dark-mode__toggle">
        <button
          id="button"
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        >
          DarkMode
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
