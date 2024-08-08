"use client";

import ContentArea from "@/components/ContentArea";
import DashboardOverlay from "@/components/DashboardOverlay";
import AddProjectWindow from "@/components/Modals/AddProjectWindow";
import Sidebar from "@/components/Sidebar";
import { AppProvider, useAppContext } from "@/context/ContextApi";
import React from "react";

const Dashboard = () => {
  const {
    openProjectWindowObject: { openProjectWindow },
  } = useAppContext();
  return (
    <div className="flex poppins h-screen relative">
      <AppProvider>
        <AddProjectWindow />
        {openProjectWindow && <DashboardOverlay />}
        <Sidebar />
        <div className="flex-grow">
          <ContentArea />
        </div>
      </AppProvider>
    </div>
  );
};

export default Dashboard;
