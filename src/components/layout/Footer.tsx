import React from "react";
import PanelSocialButtons from "../ui/PanelSocialButtons";

export default function Footer(): React.ReactElement {
  return (
    <footer className="flex justify-center items-center text-white m-4">
        <PanelSocialButtons />
    </footer>
  );
}