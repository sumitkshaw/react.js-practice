/*
  This file sets up the Context.
  Context allows data to be shared globally.
  It avoids passing props through multiple levels.
*/

import { createContext, useState } from "react";

// Create context object
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  // State stored at top-level provider
  const [theme, setTheme] = useState("light");

  // Provider makes data accessible to all children
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
