import React from "react";
import PortraitSlot from "./PortraitSlot";
import TerminalSlot from "./TerminalSlot";
import TopControlBar from "./TopControlBar";

export default function MainControlPanel(): React.ReactElement {
  return (
    <>
      <TopControlBar />
      <div className="flex flex-col lg:flex-row w-full h-full shadow-lg">

        <div className="relative flex-1 flex lg:flex-row flex-col items-center justify-center">
          <PortraitSlot />
        </div>
        <div className="flex-1 h-full flex flex-col space-y-4">
          <TerminalSlot />
        </div>
      </div>
    </>
  );
}
