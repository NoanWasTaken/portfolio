"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useActiveSection, scrollToSection, sections } from "@/hooks/use-active-section";

export default function SiteNav() {
  const { darkMode, toggleDarkMode } = useTheme();
  const activeSection = useActiveSection();

  return (
    <>
      <nav className="fixed top-0 right-0 z-50 p-6">
        <button
          onClick={toggleDarkMode}
          className="p-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-500" />
          ) : (
            <Moon size={20} className="text-gray-700" />
          )}
        </button>
      </nav>
      <div className="nav-indicator">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`nav-dot ${activeSection === section.id ? "active" : ""}`}
            onClick={() => scrollToSection(section.id)}
          >
            <div className="nav-label hidden md:block">{section.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
