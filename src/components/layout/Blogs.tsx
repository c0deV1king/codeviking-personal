import React from "react";

export default function Blogs(): React.ReactElement {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center mt-4 w-[50%]">
        <h2 className="text-2xl font-light mb-4 self-start text-black">
          Blogs
        </h2>
        <p className="text-black font-extralight text-sm">
          This section will contain blogs in the future. Stay tuned!
        </p>
      </div>
    </div>
  );
}
