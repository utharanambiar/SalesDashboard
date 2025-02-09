import React, { useState, ReactNode } from "react";
import { Theme } from "../types/types";
import { ThemeContext } from "./useTheme";

// Provider component to manage the theme
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const defaultTheme: Theme =
    (localStorage.getItem("theme") as Theme) === "dark" ? "dark" : "light";
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
