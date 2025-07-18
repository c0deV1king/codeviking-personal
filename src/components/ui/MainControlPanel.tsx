import React from "react";
import PortraitSlot from "./PortraitSlot";
import TerminalSlot from "./TerminalSlot";
import PanelSocialButtons from "./PanelSocialButtons";

export default function MainControlPanel(): React.ReactElement {
  return (
    <>
      {/* Main content area */}
      <div className="relative p-4 flex-1 flex lg:flex-row flex-col items-center justify-center">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>

        <PortraitSlot />

        {/* Control panel elements */}
        <div className="flex-1 h-full flex flex-col p-4 lg:ml-4 lg:mt-0 mt-4 space-y-4">
          <TerminalSlot />
          <PanelSocialButtons />
        </div>
      </div>
    </>
  );
}
