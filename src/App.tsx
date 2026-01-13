import { useState, useEffect } from "react";
import { Sun, Moon} from "lucide-react";

import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", name: "Accueil" },
    { id: "skills", name: "Compétences" },
    { id: "about", name: "À propos" },
    { id: "projects", name: "Projets" },
    { id: "contact", name: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-gray-50 dark:bg-zinc-900 min-h-screen text-zinc-900 dark:text-white transition-colors duration-500">
        
        <nav className="fixed top-0 right-0 z-50 p-6">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-700" />}
          </button>
        </nav>

        <div className="nav-indicator">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              <div className="nav-label">{section.name}</div>
            </div>
          ))}
        </div>

        
        <Hero />  
        <Skills />
        <About />
        <Projects />
        <Contact />
        
      </main>
    </div>
  );
}
