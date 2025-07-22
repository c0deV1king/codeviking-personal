import React from "react";
import AboutMe from "../ui/AboutMe";

export default function Header(): React.ReactElement {
  return (
    <>
      <div className="flex flex-col text-black items-center justify-center mt-20">
        <div className="w-[50%] flex flex-col">
          <div className="text-2xl font-mono self-start">&lt; NAME / &gt;</div>
          <div className="flex flex-row flex-wrap">
            <div className="flex-1">
              <AboutMe />
            </div>
            <div className="w-36 h-36 bg-black flex-shrink-0"></div>
          </div>
        </div>
      </div>
    </>
  );
}
