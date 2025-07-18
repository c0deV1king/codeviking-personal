import React from "react";
import { type ProjectItemProps } from "../../types/project";

export function ProjectBlock({
  title,
  description,
  technologies,
  repo,
  live,
}: ProjectItemProps): React.ReactElement {
  return (
    <li className="rounded-lg p-2 bg-gradient-to-r from-slate-900 to-slate-800 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
      <div className="flex items-center flex-row w-full">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="ml-2 w-8 h-8 min-w-8 min-h-8 hover:text-cyan-400 transition-colors duration-300 flex-shrink-0 text-cyan-300 drop-shadow-lg"
        >
          <path
            d="M7 4 L15 10 L7 16"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex flex-col ml-4 flex-1 min-w-0">
          <h3 className="text-xl font-semibold break-words text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            {title}
          </h3>
          <p className="text-gray-300 break-words leading-relaxed">
            {description}
          </p>
          <div className="mt-2 flex flex-col md:flex-row ">
            <span className="text-sm font-medium text-cyan-300 mr-2">
              Tech Stack:
            </span>
            <ul className="flex md:flex-row flex-col gap-2 text-sm text-gray-600">
              {technologies.map((tech: string, index: number) => (
                <li
                  key={index}
                  className="list-none bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-1 py-1 text-white w-fit shadow-md hover:shadow-cyan-500/50 transition-shadow duration-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2 flex flex-row gap-2">
            <a
              href={repo}
              className="text-cyan-400 bg-gradient-to-r from-slate-800 to-slate-700 px-2 py-1 border border-cyan-400 hover:text-white transition-colors duration-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
            <a
              href={live}
              className="text-cyan-400 bg-gradient-to-r from-slate-800 to-slate-700 px-2 py-1 border border-cyan-400 hover:text-white transition-colors duration-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-300"
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
