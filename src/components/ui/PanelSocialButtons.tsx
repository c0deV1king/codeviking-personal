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
          className="px-3 py-1.5 text-black text-xs font-mono inline-flex items-center justify-center"
        >
                  <img src="/github.svg" alt="GitHub" className="w-12 h-12" />
        </a>
        <a
          href="https://www.linkedin.com/in/austin-higgins-90b550141/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 text-black text-xs font-mono inline-flex items-center justify-center"
        >
                  <img src="/linkedin.svg" alt="GitHub" className="w-12 h-12" />
        </a>
      </div>
    </>
  );
}
