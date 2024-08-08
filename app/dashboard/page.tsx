"use client";

import ContentArea from "@/components/ContentArea";
import DashboardOverlay from "@/components/DashboardOverlay";
import { IconData } from "@/components/Icons/AllIconsData";
import IconWindow from "@/components/Icons/IconWindow";
import AddProjectWindow from "@/components/Modals/AddProjectWindow";
import Sidebar from "@/components/Sidebar";
import { AppProvider, useAppContext } from "@/context/ContextApi";
import CodeIcon from "@mui/icons-material/Code";
import React, { useState } from "react";

interface SelectedIcon {
  icon: React.ReactNode;
  name: string;
}

const Dashboard = () => {
  const {
    openProjectWindowObject: { openProjectWindow },
  } = useAppContext();

  const [selectedIcon, setSelectedIcon] = useState<SelectedIcon>({
    icon: <CodeIcon className="text-[20px]" />,
    name: "CodeIcon",
  });

  function getTheIconSelected(icon: IconData) {
    setSelectedIcon({ icon: icon.icon, name: icon.name });
  }

  return (
    <div className="flex poppins h-screen relative">
      <AppProvider>
        <IconWindow onUpdateIconSelected={getTheIconSelected} />
        <AddProjectWindow selectedIcon={selectedIcon} />
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
