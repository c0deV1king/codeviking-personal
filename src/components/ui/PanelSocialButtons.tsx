import React from "react";

export default function PanelSocialButtons(): React.ReactElement {
  return (
    <>
      {/* Bottom Buttons under terminal */}
      <div className="flex flex-row gap-2 justify-end">
        <a
          href="https://github.com/c0dev1king"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-gray-700 to-gray-600 border border-cyan-400/60 px-3 py-1.5 text-cyan-400 text-xs font-mono hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 inline-flex items-center justify-center"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/austin-higgins-90b550141/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-gray-700 to-gray-600 border border-cyan-400/60 px-3 py-1.5 text-cyan-400 text-xs font-mono hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 inline-flex items-center justify-center"
        >
          LINKEDIN
        </a>
      </div>
    </>
  );
}
