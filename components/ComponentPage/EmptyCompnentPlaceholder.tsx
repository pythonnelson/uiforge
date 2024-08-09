"use client";

import { useAppContext } from "@/context/ContextApi";
import { TextToIcon } from "@/lib/textToIcon";
import React from "react";
import AddOutlineIcon from "@mui/icons-material/AddCircleOutline";

const EmptyCompnentPlaceholder = () => {
  const {
    selectedProjectObject: { selectedProject },
  } = useAppContext();
  return (
    <div className="p-1 gap-5 flex flex-col justify-center h-[500px] mt-[68px] mb-[34px] items-center">
      {selectedProject?.icon !== undefined && (
        <div className="w-28 h-28 bg-slate-200 rounded-full flex items-center justify-center">
          {TextToIcon({
            text: selectedProject?.icon,
            fontSize: 60,
            className: "text-slate-100",
          })}
        </div>
      )}
      <div className="flex flex-col">
        <h3 className="font-semibold text-[19px] mb-1 text-center">{`There are no components Yet!...`}</h3>
        <p className="text-gray-400 text-center text-[14px]">
          Please click on the button below to create your first amazing
          component
        </p>
      </div>
      <button className="bg-[#1b6a88] flex gap-1 items-center p-2 rounded-md text-white text-center text-[12px] px-3 pr-5">
        <AddOutlineIcon />
        <span className="text-sm">Add new component</span>
      </button>
    </div>
  );
};

export default EmptyCompnentPlaceholder;
