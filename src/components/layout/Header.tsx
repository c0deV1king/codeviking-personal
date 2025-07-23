import React from "react";
import AboutMe from "../ui/AboutMe";

export default function Header(): React.ReactElement {
  return (
    <>
      <div className="flex flex-col text-black items-center justify-center mt-20">
        <div className="w-[50%] flex flex-col">
          <div className="text-2xl font-light self-start">
            &lt; Austin Higgins / &gt;
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="flex-1 h-36 overflow-hidden">
              <AboutMe />
            </div>
            {/* Three.js canvas location */}
            <div className="w-36 h-36 bg-black flex-shrink-0"></div>
          </div>
          <div className="w-full bg-black h-0.5 my-4"></div>
        </div>
      </div>
    </>
  );
}
