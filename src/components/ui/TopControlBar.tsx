import React from "react";

export default function TopControlBar(): React.ReactElement {
  return (
    <>
      {/* Top control bar */}
      <div className="relative border-b border-cyan-500/50 bg-gradient-to-r from-slate-800 to-slate-700 p-2 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
          </div>
          <div className="text-cyan-400 text-xs font-mono tracking-wider">
            CTRL-PNL-01
          </div>
        </div>
      </div>
    </>
  );
}
