import React from "react";
import { ProjectBlock } from "../ui/ProjectBlock";
import { projects } from "../../data/projects";

export default function Projects(): React.ReactElement {
  return (
    <>
      <div className="flex flex-col items-start justify-center p-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <ProjectBlock
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
