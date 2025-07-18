import React from "react";
import TopControlBar from "../ui/TopControlBar";
import MainControlPanel from "../ui/MainControlPanel";
import BottomControlBar from "../ui/BottomControlBar";

export default function BaseCard(): React.ReactElement {
  return (
    <div className="relative w-3/4 lg:h-[75vh] h-auto min-h-[90vh] mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 border-2 border-cyan-400/50 rounded-none shadow-2xl overflow-hidden flex flex-col">
      <TopControlBar />
      <MainControlPanel />
      <BottomControlBar />
    </div>
  );
}
