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
    name: "Tabs Counter",
    description:
      "A small Firefox extension that counts the number of open tabs and more.",
    imageUrl: "/tabs_counter.png",
    projectUrl:
      "https://addons.mozilla.org/en-US/firefox/addon/simple-tabs-counter/",
    githubUrl: "https://github.com/NoanWasTaken/tabs-counter",
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
