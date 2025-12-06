// src/theme/ThemeProvider.jsx
import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// Sempre começa em LIGHT, a menos que já tenha algo salvo no localStorage
const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;

  return "light"; // padrão absoluto
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    window.localStorage.setItem("theme", theme);

    // DEBUG opcional: descomenta se quiser ver no console
    // console.log("Tema atual:", theme, "classes html:", root.className);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}

