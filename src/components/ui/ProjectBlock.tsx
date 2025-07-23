import React from "react";
import { type ProjectItemProps } from "../../types/project";

export function ProjectBlock({
  title,
  description,
  technologies,
  repo,
  live,
  sceneComponent: SceneComponent,
}: ProjectItemProps): React.ReactElement {
  return (
    <li className="rounded-lg">
      <div className="flex items-start flex-row w-full">
        {/* Three.js canvas location */}
        <div className="w-36 h-36 flex-shrink-0">
          {SceneComponent ? (
            <SceneComponent />
          ) : (
            <div className="w-full h-full bg-black" />
          )}
        </div>
        <div className="flex flex-col ml-4 flex-1 min-w-0">
          <h3 className="text-md font-normal break-words text-red-800 bg-clip-text">
            {title}
          </h3>
          <p className="text-black break-words leading-relaxed font-extralight text-sm">
            {description}
          </p>
          <div className="mt-2 flex flex-col md:flex-row ">
            <ul className="flex md:flex-row flex-wrap flex-col gap-2 text-xs text-black">
              {technologies.map((tech: string, index: number) => (
                <li
                  key={index}
                  className="list-none bg-black rounded-full px-1 text-white w-fit shadow-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2 flex flex-row gap-2">
            <a
              href={repo}
              className="text-black bg-transparent px-1 py-1 border border-black rounded-full hover:text-yellow-600 transition-colors duration-300 hover:border-yellow-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
            <a
              href={live}
              className="text-black bg-transparent px-1 py-1 border border-black rounded-full hover:text-yellow-600 transition-colors duration-300 hover:border-yellow-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
