"use client";

import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  emerald: "emerald",
  dracula: "dracula",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState();

  const toggleTheme = () => {
    const newTheme = theme === themes.emerald ? themes.dracula : themes.emerald;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline">
      {theme === "emerald" ? (
        <BsMoonFill className="h-4 w-4 " />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
};
export default ThemeToggle;
