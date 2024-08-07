import { useAppContext } from "@/context/ContextApi";
import React from "react";
import { SiReact } from "react-icons/si";

const Logo = () => {
  const {
    openSideBarObject: { openSideBar },
  } = useAppContext();
  return (
    <div
      className={`${
        openSideBar
          ? "flex gap-2 items-center"
          : "flex gap-2 items-center justify-center"
      }`}
    >
      <div className="bg-[#1B6A88] flex w-12 h-12 items-center justify-center p-[6px] rounded-md">
        <SiReact className="text-white text-[28px]" />
      </div>

      {openSideBar && (
        <div className="flex gap-1 text-[23px]">
          <span className="font-bold">UI</span>
          <span className="text-[#1B6A88] font-extrabold">Forge</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
