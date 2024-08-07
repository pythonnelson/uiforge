"use client";

import React from "react";
import TopBar from "./TopBar";
import { useAppContext } from "@/context/ContextApi";
import Overlay from "./Overlay";

const ContentArea = () => {
  const {
    showSideBarObject: { showSideBar },
    isMobileViewObject: { isMobileView },
  } = useAppContext();

  console.log("Mobile View", isMobileView);
  console.log("Show Sidebar", showSideBar);

  return (
    <div className="w-full bg-slate-50 h-screen p-5">
      <TopBar />
      {isMobileView && showSideBar && <Overlay />}
    </div>
  );
};

export default ContentArea;
