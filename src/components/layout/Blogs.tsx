import React from "react";
import { blogs } from "../../data/blogs";
import { BlogBlock } from "../ui/BlogBlock";

export default function Blogs(): React.ReactElement {
  return (
    <>
      <div className="flex justify-center mt-8 mb-8">
        <div className="flex flex-col p-0 w-[100%] sm:w-[50%]">
          <ul className="space-y-4">
            {blogs.map((blog, index) => (
              <BlogBlock
                key={index}
                title={blog.title}
                tags={blog.tags}
                date={blog.date}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
