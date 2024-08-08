import React from "react";
import { Project } from "@/constants/data";
import { TextToIcon } from "@/lib/textToIcon";

const ProjectsCard = ({ singleProject }: { singleProject: Project }) => {
  return (
    <div className="w-[200px] border border-slate-100 rounded-md p-5 flex gap-2 justify-center flex-col items-center max-sm:w-full dark:border-slate-900 dark:bg-slate-900">
      <div className="w-[70px] h-[70px] bg-[#abe1f7] rounded-full flex items-center justify-center">
        {TextToIcon({ text: singleProject.icon, size: "medium" })}
      </div>

      <div className="flex flex-col items-center justify-center">
        <span className="font-semibold text-lg cursor-pointer select-none transition-all duration-300 hover:text-[#1b6a88]">
          {singleProject.name}
        </span>
        <span className="text-[12px] text-slate-400 text-center">
          {singleProject.components.length} Components
        </span>
      </div>
    </div>
  );
};

export default ProjectsCard;
