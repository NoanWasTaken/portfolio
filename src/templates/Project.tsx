import React from "react";

interface ProjectProps {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
}

export default function Project({
  name,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
}: ProjectProps) {
  const bothLinks = projectUrl && githubUrl;

  const [showOverlay, setShowOverlay] = React.useState(false);

  const handleImageClick = () => {
    setShowOverlay(!showOverlay);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white dark:bg-zinc-700 h-full flex flex-col">
      <div
        className="relative w-full h-32 sm:h-36 lg:h-48 overflow-hidden group cursor-pointer lg:cursor-default"
        onClick={handleImageClick}
      >
        <img
          className="w-full h-full object-cover transition-transform duration-300"
          src={imageUrl}
          alt={name}
        />

        <div
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex ${showOverlay ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100 pointer-events-none lg:pointer-events-auto"}`}
          onClick={handleOverlayClick}
          style={{ pointerEvents: showOverlay ? "auto" : undefined }}
        >
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-lg hover:bg-black/50 transition-colors duration-200 ${
                bothLinks ? "w-1/2" : "w-full"
              }`}
            >
              <span className="flex flex-col items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mb-1 sm:mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Source code
              </span>
            </a>
          )}
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center text-white font-semibold text-xs sm:text-sm lg:text-lg hover:bg-black/50 transition-colors duration-200 ${
                bothLinks ? "w-1/2 " : "w-full"
              }`}
            >
              <span className="flex flex-col items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mb-1 sm:mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View Project
              </span>
            </a>
          )}
        </div>
      </div>

      <div className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 flex-1 flex flex-col">
        <div className="font-bold text-sm sm:text-base lg:text-xl mb-1 sm:mb-2 text-gray-900 dark:text-white line-clamp-2">
          {name}
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-base line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}
