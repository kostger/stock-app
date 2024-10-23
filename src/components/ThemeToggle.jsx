import React, { useState, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get initial theme from local storage or default to false
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full bg-white"
    >
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
}

export default ThemeToggle;
