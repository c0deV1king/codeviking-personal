import React from "react";

export default function Skills(): React.ReactElement {
  return (
    <>
      <div className="flex justify-center">
        <img
          src="/javascript.svg"
          alt="JavaScript"
          className="w-12 h-12 mx-2"
        />
        <img src="/react.svg" alt="React" className="w-12 h-12 mx-2" />
        <img src="/tailwind.png" alt="Tailwind" className="w-12 h-12 mx-2" />
        <img src="/git.svg" alt="Git" className="w-12 h-12 mx-2" />
      </div>
    </>
  );
}
