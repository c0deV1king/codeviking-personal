import React from "react";
import { ProjectBlock } from "../ui/ProjectBlock";
import { projects } from "../../data/projects";

export default function Projects(): React.ReactElement {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col p-0 w-[50%]">
          <h2 className="text-2xl font-light text-black self-start mb-4">
            Projects
          </h2>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <ProjectBlock
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                repo={project.repo || ""}
                live={project.live || ""}
                sceneComponent={project.sceneComponent}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
