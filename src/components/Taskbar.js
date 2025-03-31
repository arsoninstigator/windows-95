import React from "react";
import { Computer, Folder, Globe } from "@react95/icons";

export default function Taskbar({ toggleWindow }) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-winGray border-t-4 border-black p-2 flex justify-around items-center">
      <button className="flex items-center gap-2 bg-pastelGreen px-4 py-2 border-2 border-black shadow-md">
        <Computer /> Start
      </button>
      <button className="flex items-center gap-2" onClick={() => toggleWindow("projects")}>
        <Folder /> Projects
      </button>
      <button className="flex items-center gap-2" onClick={() => toggleWindow("socials")}>
        <Globe /> Socials
      </button>
    </div>
  );
}
