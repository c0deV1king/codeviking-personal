export interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  repo: string;
  live: string;
  sceneComponent?: React.ComponentType;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repo?: string;
  live?: string;
  sceneComponent?: React.ComponentType;
}
