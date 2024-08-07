import React from "react";
import DashboardText from "./DashboardText";
import SearchBar from "./SearchBar";
import { DarkMode } from "./DarkMode";
import ProfileAccount from "./ProfileAccount";

const TopBar = () => {
  return (
    <div className="bg-white rounded-md dark:bg-slate-900 w-full p-[11px] px-6 flex justify-between items-center">
      <DashboardText />
      <SearchBar />
      <div className="flex gap-4 items-center">
        <DarkMode />
        <ProfileAccount />
      </div>
    </div>
  );
};

export default TopBar;
