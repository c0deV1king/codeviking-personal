import { type Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Rocket Explorer",
    description:
      "A simple webapp that allows the user to explore the solar system and learn about the various planets, moons and objects",
    technologies: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/c0deV1king/rocket-explorer",
    live: "https://c0dev1king.github.io/rocket-explorer/",
    sceneId: "rocket-explorer",
  },
  {
    title: "Steam Tracker Frontend",
    description:
      "Steam tracker is a webapp that showcases your steam profile, games and achievements",
    technologies: ["React", "JavaScript", "Tailwind"],
    repo: "https://github.com/c0deV1king/Steam-Tracker-Demo",
    live: "https://steam-tracker.codeviking.io/",
    sceneId: "steam-tracker-frontend",
  },
  {
    title: "Steam Tracker Backend",
    description: "The server logic for the Steam Tracker webapp",
    technologies: [
      "TypeScript",
      "Sequelize",
      "MySQL",
      "Axios",
      "Node.js",
      "Express",
      "Railway",
      "Mocha, Chai & Sinon",
    ],
    repo: "https://github.com/c0deV1king/Steam-Tracker-Backend",
    live: "https://steam-tracker.codeviking.io/",
    sceneId: "steam-tracker-backend",
  },
];
