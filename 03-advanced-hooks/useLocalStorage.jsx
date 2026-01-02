/*
  This hook syncs React state with localStorage.
  Data persists even after page refresh.
  Useful for themes, auth tokens, preferences.
*/

import { useState } from "react";

function useLocalStorage(key, initialValue) {
  // Initial state is read from localStorage (once)
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initialValue;
  });

  // Updates both React state and localStorage
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
}

// Component using persistent state
function ThemeToggle() {
  // Theme persists across reloads
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div>
      <h2>Theme: {theme}</h2>
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

export default ThemeToggle;
