"use client";

import React, { useEffect, useRef } from "react";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useAppContext } from "@/context/ContextApi";

const Dropdown = () => {
  const {
    dropDownPositionObject: { dropDownPositions },
    openDropDownObject: { openDropdown, setOpenDropdown },
    openDeleteWindowObject: { setOpenDeleteWindow },
    showSideBarObject: { setShowSideBar },
  } = useAppContext();
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    }

    function handleScroll() {
      setOpenDropdown(false);
    }

    function handleWheel(event: WheelEvent) {
      if (event.deltaY !== 0) {
        setOpenDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [setOpenDropdown]);

  function deleteConfirmationFunction() {
    setOpenDeleteWindow(true);
    setOpenDropdown(false);
    // setShowSideBar(false);
  }

  return (
    <div
      ref={dropDownRef}
      style={{
        top: dropDownPositions.top + 54,
        left: dropDownPositions.left - 135,
        visibility: openDropdown ? "visible" : "hidden",
      }}
      className="bg-white z-50 px-5 border border-slate-50 fixed py-4 w-[160px] select-none shadow-md rounded-lg flex flex-col gap-5"
    >
      {/* ===EDIT == */}
      <div className="flex gap-1 items-center text-slate-600 cursor-pointer hover:text-[#1b6a88]">
        <EditIcon sx={{ fontSize: 21 }} className="text-[21px]" />
        <span className="text-[14px]">Edit</span>
      </div>
      {/* ===EDIT END == */}
      {/* ===DUPLICATE == */}
      <div className="flex gap-1 items-center text-slate-600 cursor-pointer hover:text-[#1b6a88]">
        <ContentCopyIcon sx={{ fontSize: 21 }} className="text-[21px]" />
        <span className="text-[14px]">Duplicate</span>
      </div>
      {/* ===DUPLICATE END == */}
      <hr className="border-t border-slate-200" />
      {/* ===Delete == */}
      <div
        onClick={deleteConfirmationFunction}
        className="flex gap-1 items-c enter text-red-500 cursor-pointer hover:text-red-600"
      >
        <DeleteOutlinedIcon sx={{ fontSize: 21 }} className="text-[21px]" />
        <span className="text-[14px]">Delete</span>
      </div>
      {/* ===Delete END == */}
    </div>
  );
};

export default Dropdown;
