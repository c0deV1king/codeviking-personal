import React from "react";

export default function PortraitSlot(): React.ReactElement {
  return (
    <>
      {/* Image size in px is 438 by 555 */}
      {/* Portrait image section */}
      <div className="relative w-full lg:h-full h-[300px] flex-shrink-0">
        <div className="relative w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 lg:rounded-bl-lg overflow-hidden">
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
            <div className="text-[#f2f2f2] text-xs font-mono">IMG_SLOT</div>
          </div>
        </div>
      </div>
    </>
  );
}
