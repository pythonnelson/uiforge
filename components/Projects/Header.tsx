import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AddIcon from "@mui/icons-material/Add";

const Header = () => {
  return (
    <div>
      <span className="text-lg flex gap-2 justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="font-bold text-lg">All Projects</span>
          <span className="text-[14px] text-[#1b6a88] cursor-pointer">
            More
            <ArrowRightAltIcon />
          </span>
        </div>

        <button className="bg-slate-900 text-white text-[12px] px-3 py-[2px] rounded-md transition-all duration-300 hover:text-[#1b6a88]">
          <AddIcon fontSize="small" />
          <span className="text-[13px]">New Project</span>
        </button>
      </span>
    </div>
  );
};

export default Header;
