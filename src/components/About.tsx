import { motion } from "framer-motion";
import { MenuBook, Timeline } from "@mui/icons-material";
import { useState } from "react";

export default function About() {
  const [activeAboutView, setActiveAboutView] = useState<"paragraph" | "tree">(
    "paragraph"
  );

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 dark:bg-zinc-900 flex items-center justify-center relative overflow-hidden"
    >
      <div className="about-elements hidden lg:block">
        {/* Animations */}
        <div
          className="story-line"
          style={{ top: "20%", left: "10%", animationDelay: "0s" }}
        ></div>
        <div
          className="story-line"
          style={{ top: "40%", right: "15%", animationDelay: "2s" }}
        ></div>
        <div
          className="story-line"
          style={{ bottom: "25%", left: "20%", animationDelay: "4s" }}
        ></div>

        <div
          className="experience-dot"
          style={{ top: "15%", left: "25%", animationDelay: "1s" }}
        ></div>
        <div
          className="experience-dot"
          style={{ top: "35%", right: "30%", animationDelay: "3s" }}
        ></div>
        <div
          className="experience-dot"
          style={{ bottom: "20%", left: "35%", animationDelay: "5s" }}
        ></div>
        <div
          className="experience-dot"
          style={{ top: "60%", right: "20%", animationDelay: "2s" }}
        ></div>
        <div
          className="experience-dot"
          style={{ bottom: "40%", right: "10%", animationDelay: "4s" }}
        ></div>

        <svg
          className="journey-path"
          style={{ top: "30%", left: "40%", width: "100px", height: "60px" }}
        >
          <path
            d="M 0 30 Q 50 0 100 30"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,5"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,100;50,50;100,0;0,100"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900 opacity-50"></div>

      <div className="relative z-10 w-full max-w-5xl px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl lg:text-7xl font-black mb-8 text-gray-900 dark:text-white tracking-tight">
            ABOUT ME
          </h2>

          {/* Toggle Switch */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <div className="bg-white dark:bg-zinc-800 p-1.5 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 flex relative">
              <div
                className={`absolute inset-y-1.5 w-[calc(50%-6px)] bg-blue-500 rounded-full transition-all duration-300 ease-in-out ${
                  activeAboutView === "paragraph"
                    ? "left-1.5"
                    : "left-[calc(50%+1.5px)]"
                }`}
              ></div>
              <button
                onClick={() => setActiveAboutView("paragraph")}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 w-32 ${
                  activeAboutView === "paragraph"
                    ? "text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
              >
                <MenuBook />
              </button>
              <button
                onClick={() => setActiveAboutView("tree")}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 w-32 ${
                  activeAboutView === "tree"
                    ? "text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
              >
                <Timeline />
              </button>
            </div>
          </div>

          <div className="relative group/container">
            <div className="h-[500px] overflow-y-auto pr-2">
              {activeAboutView === "paragraph" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-2xl mx-auto flex flex-col items-center justify-center"
                >
                  <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-8">
                    I have been passionate by many things througout my life, but
                    programming has always been the one i had the most
                    satisfaction with. When i started learning by myself, I
                    instantly knew I was in the right path and I wanted to base
                    a career on web development. Ever since, I have been
                    learning and improving my skills, and I'm probably still
                    doing as you read this.
                    <br />
                    I believe having a passion as a job is the best way to
                    create quality products.
                    <br />
                    Aside from that, I enjoy cars, video games (playing and
                    making), electronics and photography. All of these are
                    passions of mine, that I mix together to create something
                    that represents me and that I enjoy doing.
                  </p>

                  <div className="w-full max-w-lg border-l-4 border-blue-500/30 dark:border-blue-400/30 pl-6 py-2 italic">
                    <p className="text-xl text-gray-600 dark:text-gray-300 font-serif">
                      "A jack of all trades is a master of none, but oftentimes
                      better than a master of one"
                    </p>
                    <p className="text-right text-sm font-bold mt-2 text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      — William Shakespeare
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative max-w-3xl mx-auto py-4"
                >
                  {/* Central Line - Desktop only */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                  {/* Mobile Timeline Line */}
                  <div className="md:hidden absolute left-6 top-4 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                  <div className="space-y-8">
                    {[
                      {
                        year: "October 2025 - Currently",
                        title:
                          "Master's Degree in Full-Stack Development and Technical Leadership",
                        place: ".decode",
                        desc: "Making full-stack applications and learning to lead technical teams. Apprenticeship in web and mobile development at W-HA (Orange).",
                      },
                      {
                        year: "July 2025",
                        title:
                          "Bachelor's Degree in Digital Project Management, Specialization in Web Development",
                        place: "EEMI",
                        desc: "Combined with a 2 year apprenticeship in web and mobile development at W-HA (Orange).",
                      },
                      {
                        year: "May 2023 - Currently",
                        title: "Apprenticeship in Web and Mobile Development",
                        place: "W-HA (Orange)",
                        desc: "Developed internal tools in Angular and JAVA. Also made applications in Kotlin and Flutter.",
                      },
                      {
                        year: "2022",
                        title:
                          "General Baccalaureate (French high school diploma)",
                        place: "Lycée Van Gogh, Ermont",
                        desc: "With Honors (Mention Bien), Specializations in Mathematics and Computer Science (NSI)",
                      },
                    ].map((item, index) => (
                      <div key={index} className="w-full">
                        {/* Desktop Layout */}
                        <motion.div
                          key={`desktop-${index}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="hidden md:flex items-center justify-center w-full group"
                        >
                          <div className="w-5/12 text-right pr-8">
                            {index % 2 === 0 && (
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                  {item.title}
                                </h3>
                                <div className="text-sm font-medium text-blue-500 mb-2">
                                  {item.place}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            )}
                            {index % 2 !== 0 && (
                              <div className="text-4xl font-black text-gray-300 dark:text-zinc-800 tracking-tighter transition-colors duration-300 group-hover:text-blue-200 dark:group-hover:text-zinc-700/50">
                                {item.year}
                              </div>
                            )}
                          </div>

                          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-zinc-900 shadow-sm z-10 group-hover:scale-125 transition-transform duration-300"></div>

                          <div className="w-5/12 pl-8 text-left">
                            {index % 2 !== 0 ? (
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                  {item.title}
                                </h3>
                                <div className="text-sm font-medium text-blue-500 mb-2">
                                  {item.place}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            ) : (
                              <div className="text-4xl font-black text-gray-300 dark:text-zinc-800 tracking-tighter transition-colors duration-300 group-hover:text-blue-200 dark:group-hover:text-zinc-700/50">
                                {item.year}
                              </div>
                            )}
                          </div>
                        </motion.div>

                        {/* Mobile Layout (Cards) */}
                        <motion.div
                          key={`mobile-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="md:hidden flex w-full relative pl-12"
                        >
                          <div className="absolute left-6 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-zinc-900 shadow-sm z-10 mt-1.5"></div>
                          <div className="w-full bg-white dark:bg-zinc-800/50 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-zinc-700/50 mb-2">
                            <div className="text-xs font-bold text-blue-500 mb-1">
                              {item.year}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-snug">
                              {item.title}
                            </h3>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                              {item.place}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
