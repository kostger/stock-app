import React, { useState, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full bg-white dark:bg-gray-800"
      whileTap={{ scale: 0.9 }}
      initial={{ rotate: 0 }}
      animate={{ rotate: isDarkMode ? 180 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{ scale: 1.2 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDarkMode ? (
          <motion.div
            key="light-icon"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <LightModeIcon style={{ color: "#fff" }} />
          </motion.div>
        ) : (
          <motion.div
            key="dark-icon"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <DarkModeIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default ThemeToggle;
