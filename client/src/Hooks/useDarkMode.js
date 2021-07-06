import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage(false);
  useEffect(() => {
    const element = window.document.body;
    if (darkMode === true) {
      element.classList.add("dark-mode");
    } else {
      element.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
export default useDarkMode;
