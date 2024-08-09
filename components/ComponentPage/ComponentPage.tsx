"use client";

import React from "react";
import ComponentHeader from "./ComponentHeader";
import AllComponentsPage from "./AllComponentsPage";
import { useAppContext } from "@/context/ContextApi";
import Overlay from "../Overlay";
import EmptyCompnentPlaceholder from "./EmptyCompnentPlaceholder";

const ComponentPage = () => {
  const {
    showSearchBarObject: { showSearchBar },
    selectedProjectObject: { selectedProject },
    isMobileViewObject: { isMobileView },
    showComponentPageObject: { showComponentPage },
  } = useAppContext();
  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-900 p-3 px-4 pt-5">
      {showSearchBar && isMobileView && showComponentPage && <Overlay />}
      <ComponentHeader />
      {selectedProject?.components.length === 0 && <EmptyCompnentPlaceholder />}
      <AllComponentsPage />
    </div>
  );
};

export default ComponentPage;
