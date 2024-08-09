"use client";

import { useAppContext } from "@/context/ContextApi";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const ComponentHeader = () => {
  const {
    showComponentPageObject: { setShowComponentPage },
    showSideBarObject: { showSideBar, setShowSideBar },
    selectedProjectObject: { selectedProject, setSelectedProject },
  } = useAppContext();
  return (
    <div className="flex justify-between items-center gap-4 bg-white dark:bg-slate-950 p-3 px-4 rounded-lg">
      <div className="flex gap-5 items-center w">
        <div
          onClick={() => {
            setShowComponentPage(false);
            setSelectedProject(null);
          }}
          className="border mt-[2px] p-[2px] text-slate-400 flex h-7 gap-1 px-2 items-center justify-center rounded-md cursor-pointer text-[11px]"
        >
          <ArrowBackIcon sx={{ fontSize: 11 }} className="text-[11px]" />
          <span className="max-sm:hidden">Go Back</span>
        </div>

        <div className="flex gap-2 items-center">
          <div className="flex flex-col">
            <span className="font-bold text-xl">{selectedProject?.name}</span>
            <span className="text-slate-400 text-[11px]">
              {selectedProject?.components.length} Components
            </span>
          </div>
        </div>
      </div>

      <div className="relative p-[18px] text-[13px] w-[34%] flex px-[15px] h-13 rounded-3xl bg-slate-100 items-center gap-4">
        <SearchIcon className="text-slate-400 text-[19px]" />
        <input
          placeholder="Search for a component"
          className="bg-slate-100 outline-none font-light text-[12px] w-full"
        />
        {/* ===== CLOSE ICON ===== */}
        <div className="absolute right-3 top-[13px] cursor-pointer w-5 h-5 flex justify-center items-center bg-slate-300 rounded-full">
          <CloseIcon
            sx={{ fontSize: 14 }}
            className="text-slate-400 text-[14px]"
          />
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <button className="bg-[#1b6a88] text-[12px] h-[33px] text-white px-3 rounded-md">
          <AddOutlinedIcon sx={{ fontSize: 16 }} className="" />
          <span className="max-sm:hidden">Component</span>
        </button>
        <div className="hidden max-sm:block">
          <MenuIcon
            onClick={() => setShowSideBar(true)}
            className="text-slate-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ComponentHeader;
