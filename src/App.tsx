import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Linkedin, Github, Instagram, Check } from "lucide-react";
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

        <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl lg:text-8xl xl:text-9xl font-black mb-6 tracking-tighter leading-none"
              >
                NOAN<br />
                <span className="text-gray-500 dark:text-gray-500 font-light">DELATOUCHE</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-sm lg:text-base font-normal mb-12 text-gray-700 dark:text-gray-300 tracking-[0.3em] uppercase"
              >
                WEB DEVELOPER
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex justify-center lg:justify-start gap-3 mb-12"
              >
                <button className="p-3 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300">
                  <Linkedin size={18} />
                </button>
                <button className="p-3 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300">
                  <Github size={18} />
                </button>
                <button className="p-3 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300">
                  <Instagram size={18} />
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-sm mx-auto lg:mx-0 leading-relaxed font-light"
              >
                Creating fast,<br />
                accessible, modern<br />
                web applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Resume
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="flex justify-center relative order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 w-96 h-96 lg:w-[450px] lg:h-[450px]">
                  <svg className="w-full h-full hero-spider-web" viewBox="0 0 400 400" fill="none">
                    <g className="stroke-red-500 dark:stroke-red-400" strokeWidth="2" opacity="0.8">
                      <line x1="200" y1="50" x2="200" y2="350" />
                      <line x1="350" y1="200" x2="50" y2="200" />
                      <line x1="320" y1="80" x2="80" y2="320" />
                      <line x1="320" y1="320" x2="80" y2="80" />
                      
                      <circle cx="200" cy="200" r="80" fill="none" />
                      <circle cx="200" cy="200" r="120" fill="none" />
                      <circle cx="200" cy="200" r="160" fill="none" />
                    </g>
                  </svg>
                </div>
                
                <div className="relative z-10 w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black p-1 shadow-2xl hero-image-container hero-glow-effect">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
                    <div className="w-60 h-60 lg:w-64 lg:h-64 rounded-full flex items-center justify-center relative overflow-hidden">
                      <img 
                        src="/kobayashi.jpg" 
                        alt="Anime character profile" 
                        className="w-full h-full object-cover rounded-full hero-image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-4 right-8 w-4 h-4 bg-green-400 rounded-full hero-floating-dot shadow-lg" style={{ animationDelay: '0s' }}>
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="absolute bottom-8 right-4 w-3 h-3 bg-yellow-400 rounded-full hero-floating-dot shadow-lg" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-16 left-8 w-2 h-2 bg-blue-400 rounded-full hero-floating-dot" style={{ animationDelay: '3s' }}></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="min-h-screen bg-white dark:bg-zinc-800 py-20 px-6 lg:px-16 xl:px-24 flex items-center justify-center relative light-pattern-dots">
          <div className="skills-elements">
            <div className="floating-code" style={{ top: '15%', left: '10%', animationDelay: '0s' }}>{'<div>'}</div>
            <div className="floating-code" style={{ top: '25%', right: '15%', animationDelay: '1s' }}>{'function()'}</div>
            <div className="floating-code" style={{ bottom: '20%', left: '8%', animationDelay: '2s' }}>{'const app ='}</div>
            <div className="floating-code" style={{ top: '40%', right: '12%', animationDelay: '3s' }}>{'useState()'}</div>
            <div className="floating-code" style={{ bottom: '30%', right: '20%', animationDelay: '4s' }}>{'</div>'}</div>
            
            <div className="code-bracket" style={{ top: '10%', left: '5%', animationDelay: '0.5s' }}>{'{'}</div>
            <div className="code-bracket" style={{ bottom: '15%', right: '8%', animationDelay: '2.5s' }}>{'}'}</div>
            <div className="code-bracket" style={{ top: '60%', left: '15%', animationDelay: '1.5s' }}>{'['}</div>
            <div className="code-bracket" style={{ top: '35%', right: '5%', animationDelay: '3.5s' }}>{']'}</div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-6xl lg:text-7xl font-black mb-8 text-gray-900 dark:text-white tracking-tight">
                SKILLS
              </h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center items-center gap-6 lg:gap-12"
              >
                {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="w-48 h-px bg-gray-300 dark:bg-gray-600 mx-auto"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center items-center gap-6 lg:gap-12"
              >
                {['React', 'Angular', 'Vue', 'Tailwind CSS', 'PHP', 'Laravel'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.55 + index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                viewport={{ once: true }}
                className="w-48 h-px bg-gray-300 dark:bg-gray-600 mx-auto"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center items-center gap-6 lg:gap-12"
              >
                {['Java', 'Python', 'Git and GitHub', 'Bootstrap', 'Symfony'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.95 + index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <p className="text-lg lg:text-xl text-gray-500 dark:text-gray-400 font-light italic">
                  And still collecting more and more...
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen bg-gray-50 dark:bg-zinc-900 flex items-center justify-center relative overflow-hidden">
          <div className="about-elements">
            <div className="story-line" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
            <div className="story-line" style={{ top: '40%', right: '15%', animationDelay: '2s' }}></div>
            <div className="story-line" style={{ bottom: '25%', left: '20%', animationDelay: '4s' }}></div>
            
            <div className="experience-dot" style={{ top: '15%', left: '25%', animationDelay: '1s' }}></div>
            <div className="experience-dot" style={{ top: '35%', right: '30%', animationDelay: '3s' }}></div>
            <div className="experience-dot" style={{ bottom: '20%', left: '35%', animationDelay: '5s' }}></div>
            <div className="experience-dot" style={{ top: '60%', right: '20%', animationDelay: '2s' }}></div>
            <div className="experience-dot" style={{ bottom: '40%', right: '10%', animationDelay: '4s' }}></div>
            
            <svg className="journey-path" style={{ top: '30%', left: '40%', width: '100px', height: '60px' }}>
              <path d="M 0 30 Q 50 0 100 30" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" fill="none" strokeDasharray="5,5">
                <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;0,100" dur="8s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900 opacity-50"></div>
          <div className="text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold mb-6 gradient-text"
            >
              About Me
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              This section will contain my experience and professional background.
            </motion.p>
          </div>
        </section>

        <section id="projects" className="min-h-screen bg-white dark:bg-zinc-800 flex items-center justify-center relative light-pattern-lines">
          <div className="blueprint-elements">
            <div className="blueprint-corner top-left"></div>
            <div className="blueprint-corner top-right"></div>
            <div className="blueprint-corner bottom-left"></div>
            <div className="blueprint-corner bottom-right"></div>
            
            <div className="blueprint-line horizontal" style={{ top: '120px', left: '50%', transform: 'translateX(-50%)' }}></div>
            <div className="blueprint-line vertical" style={{ left: '120px', top: '50%', transform: 'translateY(-50%)' }}></div>
            <div className="blueprint-line horizontal" style={{ bottom: '120px', right: '50%', transform: 'translateX(50%)' }}></div>
            <div className="blueprint-line vertical" style={{ right: '120px', top: '50%', transform: 'translateY(-50%)' }}></div>
            
            <div className="blueprint-circle" style={{ width: '40px', height: '40px', top: '80px', left: '200px' }}></div>
            <div className="blueprint-circle" style={{ width: '60px', height: '60px', bottom: '100px', right: '180px' }}></div>
            <div className="blueprint-circle" style={{ width: '30px', height: '30px', top: '60%', left: '150px' }}></div>
            
            <div className="blueprint-measurements" style={{ top: '100px', left: '60px' }}>120px</div>
            <div className="blueprint-measurements" style={{ bottom: '80px', right: '60px' }}>240px</div>
            <div className="blueprint-measurements" style={{ top: '50%', right: '90px', transform: 'rotate(90deg)' }}>160px</div>
          </div>
          
          <div className="text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              My Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Here will be displayed my projects.
            </motion.p>
          </div>
        </section>

        <section id="contact" className="min-h-screen bg-gray-50 dark:bg-zinc-900 flex items-center justify-center relative overflow-hidden light-pattern-diagonal">
          <div className="contact-elements">
            <div className="connection-line" style={{ top: '25%', left: '15%', width: '150px', animationDelay: '0s' }}></div>
            <div className="connection-line" style={{ top: '60%', right: '20%', width: '120px', animationDelay: '2s' }}></div>
            <div className="connection-line" style={{ bottom: '30%', left: '25%', width: '100px', animationDelay: '4s' }}></div>
            
            <div className="message-bubble" style={{ top: '20%', left: '20%', animationDelay: '1s' }}></div>
            <div className="message-bubble" style={{ top: '50%', right: '25%', animationDelay: '3s' }}></div>
            <div className="message-bubble" style={{ bottom: '25%', left: '30%', animationDelay: '5s' }}></div>
            
            <div className="network-node" style={{ top: '30%', left: '40%', animationDelay: '0.5s' }}></div>
            <div className="network-node" style={{ top: '70%', right: '35%', animationDelay: '2.5s' }}></div>
            <div className="network-node" style={{ bottom: '40%', right: '15%', animationDelay: '4.5s' }}></div>
            <div className="network-node" style={{ top: '45%', left: '15%', animationDelay: '1.5s' }}></div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-tr from-green-50 to-blue-50 dark:from-zinc-800 dark:to-zinc-900 opacity-50"></div>
          <div className="text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              This section will contain my contact information.
            </motion.p>
          </div>
        </section>
      </main>
    </div>
  );
}
