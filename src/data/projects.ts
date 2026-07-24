export interface ProjectData {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectData[] = [
  {
    name: "My Portfolio",
    description:
      "The portfolio you're currently on, showcasing my projects and skills, built with React and Tailwind CSS.",
    imageUrl: "/portfolio.png",
    projectUrl: "https://noandelatouche.dev",
    githubUrl: "https://github.com/NoanWasTaken/portfolio",
  },
  {
    name: "PIVOT",
    description: "Check if your steam games can be run on a linux system",
    imageUrl: "/pivot.png",
    projectUrl: "https://pivot.noandelatouche.dev",
    githubUrl: "https://github.com/NoanWasTaken/pivot",
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
  {
    name: "Antifa Logo Generator",
    description:
      "A small web app that generates an antifa logo with custom text and images.",
    imageUrl: "/antifalogogenerator.png",
    projectUrl: "https://antifalogogenerator.noandelatouche.dev",
    githubUrl: "https://github.com/NoanWasTaken/antifa_logo_generator",
  },
  {
    name: "GearForge",
    description:
      "Online shop with ai features and complete admin panel, stocks management and easter eggs",
    imageUrl: "/gearforge.png",
    projectUrl: "https://gearforge.noandelatouche.dev",
    githubUrl: "https://github.com/NoanWasTaken/projet_m1s1",
  },
];
