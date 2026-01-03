/*
  This file consumes the Context.
  useContext allows access to shared data.
  No props are passed manually.
*/

import { useContext } from "react";
import { ThemeContext } from "./context-setup";

function ThemeButton() {
  // Access context values directly
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeButton;
