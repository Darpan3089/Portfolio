"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="w-9 h-9 flex items-center justify-center rounded-lg opacity-0"
      />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 hover:opacity-70"
      style={{
        color: "var(--text-muted)",
        border: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      {theme === "dark" ? (
        <Sun size={16} />
      ) : (
        <Moon size={16} />
      )}
    </button>
  );
}
