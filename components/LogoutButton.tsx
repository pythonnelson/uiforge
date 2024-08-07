import { useAppContext } from "@/context/ContextApi";
import { PowerOff } from "lucide-react";
import React from "react";

const LogoutButton = () => {
  const {
    openSideBarObject: { openSideBar },
  } = useAppContext();
  return (
    <div
      className={`p-[5px] mb-6 mt-[50%] font-bold bg-white border border-[#1b6a88] select-none cursor-pointer ${
        openSideBar ? "ml-0" : "ml-3 items-center justify-center"
      } rounded-lg flex gap-2 w-[80%] items-center text-[#1b6a88] hover:bg-[#1b6a88] hover:text-white transition-all duration-300`}
    >
      <PowerOff className="w-5 h-5 flex-shrink-0" />
      {openSideBar && "Log Out"}
    </div>
  );
};

export default LogoutButton;
