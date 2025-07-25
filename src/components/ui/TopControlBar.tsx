import React from "react";

export default function TopControlBar(): React.ReactElement {
  return (
    <>
      {/* Top control bar */}
      <div className="relative bg-gradient-to-r from-gray-700 to-gray-600 p-2 flex-shrink-0 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
            <div
              className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
          <div className="text-[#f2f2f2] text-xs font-mono tracking-wider font-display">
            CTRL-PNL-01
          </div>
        </div>
      </div>
    </>
  );
}
