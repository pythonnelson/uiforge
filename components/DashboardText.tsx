"use client";

import { useAppContext } from "@/context/ContextApi";
import { useUser } from "@clerk/nextjs";
import { MenuIcon } from "lucide-react";
import React from "react";

const DashboardText = () => {
  const { user } = useUser();
  const {
    showSideBarObject: { setShowSideBar },
  } = useAppContext();
  return (
    <div className="flex flex-col">
      <div onClick={() => setShowSideBar(true)} className="hidden max-sm:block">
        <MenuIcon className="text-slate-500 cursor-pointer" />
      </div>
      <div className="flex flex-col max-sm:hidden">
        <span className="font-semibold">
          Welcome Back, {user?.firstName} {user?.lastName}
        </span>
        <span className="text-slate-400 text-[11px] font-light">
          We are happy to have you back
        </span>
      </div>
    </div>
  );
};

export default DashboardText;
