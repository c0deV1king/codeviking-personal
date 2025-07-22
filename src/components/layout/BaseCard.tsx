import React from "react";
import MainControlPanel from "../ui/MainControlPanel";

export default function BaseCard(): React.ReactElement {
  return (
    <div className="relative mt-4 w-3/4 lg:h-[75vh] h-auto min-h-[90vh] mx-auto rounded-none shadow-2xl overflow-hidden flex flex-col">
      <MainControlPanel />
    </div>
  );
}
