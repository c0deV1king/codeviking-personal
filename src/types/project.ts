export interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  repo: string;
  live: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repo?: string;
  live?: string;
}
