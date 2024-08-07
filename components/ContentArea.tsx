"use client";

import React from "react";
import TopBar from "./TopBar";
import { useAppContext } from "@/context/ContextApi";
import Overlay from "./Overlay";
import StatsCard from "./StatsCard";

const ContentArea = () => {
  const {
    showSideBarObject: { showSideBar },
    isMobileViewObject: { isMobileView },
  } = useAppContext();

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 h-screen p-5">
      <TopBar />
      <StatsCard />
      {isMobileView && showSideBar && <Overlay />}
    </div>
  );
};

export default ContentArea;
