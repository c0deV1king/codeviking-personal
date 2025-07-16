import React from "react";

export default function BottomControlBar(): React.ReactElement {
  return (
    <>
      {/* Bottom status bar - cosmetic */}
      <div className="border-t border-cyan-400/60 bg-gradient-to-r from-gray-800 to-gray-700 p-2 flex-shrink-0">
        <div className="flex justify-between items-center">
          <div className="text-green-400 text-xs font-mono">PWR: 92%</div>
          <div className="text-cyan-400 text-xs font-mono">SYS: NOMINAL</div>
          <div className="text-amber-400 text-xs font-mono">
            CPU CORE 01 TEMP: 74°C
          </div>
        </div>
      </div>
    </>
  );
}
