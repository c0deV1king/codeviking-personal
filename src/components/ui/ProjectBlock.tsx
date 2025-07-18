import React from "react";
import { type ProjectItemProps } from "../../types/project";

export function ProjectBlock({
  title,
  description,
  technologies,
}: ProjectItemProps): React.ReactElement {
  return (
    <li className="rounded-lg p-4">
      <div className="flex items-center flex-row">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="ml-2 w-8 h-8 hover:text-cyan-400 transition-colors duration-300"
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
        <div className="flex flex-col ml-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="mt-2 flex flex-row items-center">
            <span className="text-sm font-medium text-white mr-2">
              Technologies:
            </span>
            <ul className="flex flex-row list-disc list-inside text-sm text-gray-600">
              {technologies.map((tech: string, index: number) => (
                <li
                  key={index}
                  className="mr-2 list-none bg-white rounded-full px-1 py-1 text-black"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}
