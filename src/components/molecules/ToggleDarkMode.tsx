// Componente responsável por alternar e persistir o tema da aplicação (light/dark)
import { useEffect, useState } from "react";

export function ToggleDarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleTheme() {
    const newTheme = !dark;
    setDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 
      text-black dark:text-white transition"
    >
      {dark ? "Dark" : "Light"}
    </button>
  );
}