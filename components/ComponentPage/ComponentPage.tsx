"use client";

import React from "react";
import ComponentHeader from "./ComponentHeader";
import AllComponentsPage from "./AllComponentsPage";

const ComponentPage = () => {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 p-5">
      <ComponentHeader />
      <AllComponentsPage />
    </div>
  );
};

export default ComponentPage;
