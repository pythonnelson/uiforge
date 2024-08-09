"use client";

import { useAppContext } from "@/context/ContextApi";
import React, { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close";
import AllIcons, { allIconsArray, IconData } from "./AllIconsData";

const IconWindow = ({
  onUpdateIconSelected,
}: {
  onUpdateIconSelected: (icon: IconData) => void;
}) => {
  const {
    isMobileViewObject: { isMobileView },
    openIconWindowObject: { openIconWindow, setOpenIconWindow },
  } = useAppContext();
  const [allIconsState, setAllIconsState] = useState<IconData[]>(allIconsArray);
  return (
    <div
      className={`${isMobileView ? "w-[80%]" : "w-[40%]"} ${
        openIconWindow ? "absolute" : "hidden"
      } h-[490px] bg-white dark:bg-slate-900 shadow-md left-1/2 top-28 rounded-lg -translate-x-1/2 z-[60]`}
    >
      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center py-7 px-7 mb-8">
        <div className="flex items-center gap-2">
          {/* ==== ICON ===== */}
          <div className="w-[30px] h-[30px] bg-[#abe1f7] rounded-full flex items-center justify-center">
            <AppsIcon
              sx={{ fontSize: 17 }}
              className="bg-[#1b6a88] text-17px"
            />
          </div>
          {/* ==== ICON END ===== */}
          <span className="font-semibold text-lg">Projects Icons</span>
        </div>
        <CloseIcon
          onClick={() => setOpenIconWindow(false)}
          sx={{ fontSize: 16 }}
          className="text-slate-400 text-[18px] cursor-pointer"
        />
      </div>
      {/* ===== HEADER END ===== */}

      {/* ===== MESSAGE ===== */}
      <div className="mx-7 w-[80%] text-[12px] text-slate-400">
        {`Select an Icon you'l love to use for your beautiful project`}
      </div>
      {/* ===== MESSAGE ===== */}

      {/* ===== ICONS COLLECTION ===== */}
      <div className="w-full flex flex-col items-center mt-3">
        <div className="border border-slate-100 w-[92%] h-[280px] overflow-auto bg-slate-100">
          <AllIcons
            allIconsState={allIconsState}
            setAllIconsState={setAllIconsState}
          />
        </div>
      </div>
      {/* ===== ICONS COLLECTION ===== */}
      {/* ===== FOOTER ===== */}
      <div className="flex justify-end gap-4 mt-4 px-7 text-[12px]">
        <button
          onClick={() => setOpenIconWindow(false)}
          className="border border-slate-200 text-slate-400 text-[12px] p-2 px-6 rounded-md hover:border-slate-300 translation-all duration-300 hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            onUpdateIconSelected(
              allIconsState.filter((icon) => icon.isSelected)[0]
            );
            setOpenIconWindow(false);
          }}
          className="bg-[#1b6a88] hover:bg-[#0e475e] text-white text-[12px] p-2 px-3 rounded-md transition-all duration-300"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default IconWindow;
