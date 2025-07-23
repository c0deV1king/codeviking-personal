import React from "react";
import AboutMe from "../ui/AboutMe";

export default function Header(): React.ReactElement {
  return (
    <>
      <div className="flex flex-col text-black items-center justify-center mt-20">
        <div className="sm:w-[50%] w-full flex flex-col">
          <div className="text-lg sm:text-2xl font-medium sm:font-light self-center sm:self-start">
            &lt; Austin Higgins / &gt;
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap">
            <div className="flex-1 h-36 overflow-hidden">
              <AboutMe />
            </div>
            {/* Three.js canvas location */}
            <div className="w-36 h-36 self-center sm:self-start bg-black flex-shrink-0"></div>
          </div>
          <div className="w-full bg-black h-0.5 my-4"></div>
        </div>
      </div>
    </>
  );
}
