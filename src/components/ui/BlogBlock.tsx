import React from "react";
import { type Blog } from "../../types/blog";

export function BlogBlock({ title, tags, date }: Blog): React.ReactElement {
  return (
    <div className="flex items-center flex-col">
      <h3 className="text-xl text-black font-semibold hover:text-red-800 cursor-pointer">
        {title}
      </h3>
      <p className="text-yellow-600">{tags}</p>
      <p className="text-gray-400 text-sm">{date}</p>
    </div>
  );
}
