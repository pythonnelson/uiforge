import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Component } from "@/constants/data";
import { formatDate } from "@/lib/formatDate";

const Favorite = ({ component }: { component: Component }) => {
  return (
    <div className="grid grid-cols-4 text-sm items-center rounded-lg p-2 max-sm:grid-cols-2">
      <span className="hover:text-[#1b6a88] cursor-pointer transition-all duration-300">
        {component.name}
      </span>
      <span className="max-sm:hidden">{formatDate(component.createdAt)}</span>
      <span className="justify-self-start max-sm:hidden">
        <span className="inline-block rounded-2xl bg-[#1b6a88] text-white text-[12px] px-4 py-1 whitespace-nowrap">
          {component.projectName}
        </span>
      </span>
      <div className="flex gap-2">
        <div className="bg-[#1b6a88] rounded-full w-7 h-7 flex items-center justify-center hover:bg-[#0e485f] transition-all duration-300 cursor-pointer">
          <EditIcon fontSize="small" className="text-white text-[14px]" />
        </div>
        <div className="bg-red-500 rounded-full w-7 h-7 flex items-center justify-center hover:bg-red-700 transition-all duration-300 cursor-pointer">
          <DeleteForeverIcon
            fontSize="small"
            className="text-white text-[14px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Favorite;
