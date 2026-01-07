import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");  // this state will be shared

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}  {/* all child components can access the context */}
    </ThemeContext.Provider>
  );
}