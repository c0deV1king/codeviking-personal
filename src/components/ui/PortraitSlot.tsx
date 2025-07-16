import React from "react";

export default function PortraitSlot(): React.ReactElement {
  return (
    <>
      {/* Image size in px is 438 by 555 */}
      {/* Portrait image section */}
      <div className="relative w-1/3 h-[95%] flex-shrink-0">
        <div className="relative w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 border-2 border-cyan-400/70 overflow-hidden">
          {/* Placeholder for image */}
          <img
            src="/test-img.jpg"
            alt="Placeholder"
            className="w-full h-full object-cover opacity-90"
          />

          {/* Scan lines effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-pulse-slow"></div>

          {/* Image placeholder content */}
          <div className="absolute inset-0 flex items-end justify-end m-2">
            <div className="text-cyan-400/70 text-xs font-mono">IMG_SLOT</div>
          </div>

          {/* Corner frame details */}
          <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-400"></div>
          <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-cyan-400"></div>
          <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-cyan-400"></div>
          <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-400"></div>
        </div>
      </div>
    </>
  );
}
