import React from "react";
import useDarkMode from "../Hooks/useDarkMode";

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <div className="dark-mode_toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        >
          Click
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
