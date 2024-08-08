"use client";

import React, { useEffect, useRef } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import CloseIcon from "@mui/icons-material/Close";
import IceSkatingIcon from "@mui/icons-material/IceSkating";
import { useAppContext } from "@/context/ContextApi";
// import { ShieldCloseIcon } from "lucide-react";

const AddProjectWindow = () => {
  const {
    isMobileViewObject: { isMobileView },
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
  } = useAppContext();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [openProjectWindow]);

  return (
    <div
      className={`${
        isMobileView ? "w-[80%]" : "w-[40%]"
      } h-[288px] border border-slate-50 bg-white dark:bg-slate-950 rounded-md shadow-md absolute left-1/2 top-24 -translate-x-1/2 z-50 ${
        openProjectWindow ? "absolute" : "hidden"
      }`}
    >
      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center pt-7 px-7">
        <div className="flex items-center gap-2">
          {/* ===== PROJECT ICON ===== */}
          <div className="w-[30px] h-[30px] bg-blue-200 rounded-full flex items-center justify-center">
            <CategoryIcon sx={{ fontSize: 17 }} className="text-blue-400" />
          </div>
          <span className="font-semibold text-lg">New Project</span>
          {/* ===== PROJECT ICON END ===== */}
        </div>
        {/* <ShieldCloseIcon /> */}
        <CloseIcon
          onClick={() => setOpenProjectWindow(false)}
          sx={{ fontSize: 16 }}
          className="text-slate-400 text-[18px] cursor-pointer"
        />
      </div>
      {/* ===== HEADER END ===== */}

      {/* ===== BODY =====  */}
      <div className="flex flex-col gap-2 mt-11 px-7">
        <span className="text-[13px] font-medium">Project Name</span>
        <div className="flex gap-3">
          <input
            ref={inputRef}
            placeholder="Enter Project Name"
            className="p-[10px] text-[12px] w-full rounded-md border outline-none"
          />
          <div className="w-12 h-10 text-white flex items-center justify-center bg-[#abe1f7] rounded-lg cursor-pointer">
            <IceSkatingIcon sx={{ fontSize: 18 }} className="text-[18px]" />
          </div>
        </div>
      </div>
      {/* ===== BODY END =====  */}

      {/* ===== FOOTER ===== */}
      <div className="w-full mt-11 flex gap-3 justify-end px-7 items-center">
        {/* ===== CANCEL BUTTON ===== */}
        <button
          onClick={() => setOpenProjectWindow(false)}
          className="border border-slate-200 text-slate-400 text-[12px] p-2 px-6 rounded-md hover:border-slate-300 translation-all duration-300 hover:bg-slate-50"
        >
          Cancel
        </button>

        <button className="bg-[#1b6a88] hover:bg-[#0e475e] text-white text-[12px] p-2 px-3 rounded-md transition-all duration-300">
          Add Project
        </button>
        {/* ===== CANCEL BUTTON END ===== */}
      </div>
      {/* ===== FOOTER END===== */}
    </div>
  );
};

export default AddProjectWindow;
