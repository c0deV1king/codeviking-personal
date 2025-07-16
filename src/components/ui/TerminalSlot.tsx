import React from "react";

export default function TerminalSlot(): React.ReactElement {
  return (
    <>
      {/* Terminal with a summary about me - takes up most of the space */}
      <div className="flex-1 flex flex-col justify-start space-y-4 bg-gray-900 border-2 border-cyan-400/70 p-4 m-2">
        <p className="text-[#7FFF00] text-sm font-mono leading-relaxed">
          <span className="text-green-400 text-sm font-mono leading-relaxed">
            austin
          </span>
          @
          <span className="text-blue-400 text-sm font-mono leading-relaxed">
            control_panel:
          </span>
          <span className="text-red-400 text-sm font-mono leading-relaxed mr-1">
            ~/portfolio/dashboard
          </span>
          $
          <span className="text-[#7FFF00] ml-2 text-sm font-mono leading-relaxed">
            cat ~/portfolio/dashboard/the_pilot.txt
          </span>
        </p>
        <p className="text-[#7FFF00] text-sm font-mono leading-relaxed">
          &gt; Hi there... friends.
        </p>
      </div>
    </>
  );
}
