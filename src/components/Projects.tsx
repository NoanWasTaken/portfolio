import { motion } from "framer-motion";
import Project from "../templates/Project";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "My Portfolio",
      description:
        "The portfolio you're currently on, showcasing my projects and skills, built with React and Tailwind CSS.",
      imageUrl: "/portfolio.png",
      projectUrl: "https://noandelatouche.dev",
      githubUrl: "https://github.com/NoanWasTaken/portfolio",
    },
    {
      name: "Tabs Counter",
      description:
        "A small Firefox extension that counts the number of open tabs and more.",
      imageUrl: "/tabs_counter.png",
      projectUrl:
        "https://addons.mozilla.org/en-US/firefox/addon/simple-tabs-counter/",
      githubUrl: "https://github.com/NoanWasTaken/tabs-counter",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [isMobile]);

  const projectsPerPageMobile = 1;
  const projectsPerPageDesktop = 8;
  const projectsPerPage = isMobile
    ? projectsPerPageMobile
    : projectsPerPageDesktop;

  const totalPagesMobile = projects.length;
  const totalPagesDesktop = Math.ceil(projects.length / projectsPerPageDesktop);
  const totalPages = isMobile ? totalPagesMobile : totalPagesDesktop;

  const startIndex = currentPage * projectsPerPage;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage,
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-zinc-800 flex items-center justify-center relative light-pattern-lines"
    >
      <div className="blueprint-elements">
        <div className="blueprint-corner top-left"></div>
        <div className="blueprint-corner top-right"></div>
        <div className="blueprint-corner bottom-left"></div>
        <div className="blueprint-corner bottom-right"></div>

        <div
          className="blueprint-line horizontal"
          style={{ top: "120px", left: "50%", transform: "translateX(-50%)" }}
        ></div>
        <div
          className="blueprint-line vertical"
          style={{ left: "120px", top: "50%", transform: "translateY(-50%)" }}
        ></div>
        <div
          className="blueprint-line horizontal"
          style={{
            bottom: "120px",
            right: "50%",
            transform: "translateX(50%)",
          }}
        ></div>
        <div
          className="blueprint-line vertical"
          style={{ right: "120px", top: "50%", transform: "translateY(-50%)" }}
        ></div>

        <div
          className="blueprint-circle"
          style={{ width: "40px", height: "40px", top: "80px", left: "200px" }}
        ></div>
        <div
          className="blueprint-circle"
          style={{
            width: "60px",
            height: "60px",
            bottom: "100px",
            right: "180px",
          }}
        ></div>
        <div
          className="blueprint-circle"
          style={{ width: "30px", height: "30px", top: "60%", left: "150px" }}
        ></div>

        <div
          className="blueprint-measurements"
          style={{ top: "100px", left: "60px" }}
        >
          120px
        </div>
        <div
          className="blueprint-measurements"
          style={{ bottom: "80px", right: "60px" }}
        >
          240px
        </div>
        <div
          className="blueprint-measurements"
          style={{ top: "50%", right: "90px", transform: "rotate(90deg)" }}
        >
          160px
        </div>
      </div>

      <div className="w-full relative z-10 px-6 lg:px-16 xl:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 lg:mb-12 text-gray-900 dark:text-white text-center"
        >
          MY PROJECTS
        </motion.h2>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4 lg:gap-6 justify-center"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-full max-w-xs lg:w-[calc(25%-1.125rem)]"
              >
                <Project
                  name={project.name}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  projectUrl={project.projectUrl}
                  githubUrl={project.githubUrl}
                />
              </motion.div>
            ))}
          </motion.div>

          {((isMobile && projects.length > 1) ||
            (!isMobile && totalPages > 1)) && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`p-3 rounded-full border-2 transition-all duration-300 ${
                  currentPage === 0
                    ? "border-gray-300 dark:border-gray-600 text-gray-300 dark:text-gray-600 cursor-not-allowed"
                    : "border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
                }`}
                aria-label="Previous page"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentPage === index
                        ? "bg-gray-700 dark:bg-gray-300 w-8"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className={`p-3 rounded-full border-2 transition-all duration-300 ${
                  currentPage === totalPages - 1
                    ? "border-gray-300 dark:border-gray-600 text-gray-300 dark:text-gray-600 cursor-not-allowed"
                    : "border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
                }`}
                aria-label="Next page"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}

          {((isMobile && projects.length > 1) ||
            (!isMobile && totalPages > 1)) && (
            <p className="text-center mt-4 text-gray-600 dark:text-gray-400 text-sm">
              Page {currentPage + 1} of {totalPages}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
