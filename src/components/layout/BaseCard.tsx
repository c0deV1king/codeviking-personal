import React from "react";
import TopControlBar from "../ui/TopControlBar";
import MainControlPanel from "../ui/MainControlPanel";
import BottomControlBar from "../ui/BottomControlBar";

export default function BaseCard(): React.ReactElement {
  return (
    <div className="relative w-3/4 h-[75vh] mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-cyan-500/30 rounded-none shadow-2xl overflow-hidden flex flex-col">
      <TopControlBar />
      <MainControlPanel />
      <BottomControlBar />
    </div>
  );
}
