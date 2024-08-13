"use client";

import ComponentEditor from "@/components/ComponentPage/ComponentEditor";
import ComponentPage from "@/components/ComponentPage/ComponentPage";
import ConfirmationDeletionWindow from "@/components/ComponentPage/ConfirmationDeletionWindow";
import Dropdown from "@/components/ComponentPage/Dropdown";
import ContentArea from "@/components/ContentArea";
import DashboardOverlay from "@/components/DashboardOverlay";
import { IconData } from "@/components/Icons/AllIconsData";
import IconWindow from "@/components/Icons/IconWindow";
import AddProjectWindow from "@/components/Modals/AddProjectWindow";
import Sidebar from "@/components/Sidebar";
import { useAppContext } from "@/context/ContextApi";
import CodeIcon from "@mui/icons-material/Code";
import React, { useState } from "react";

interface SelectedIcon {
  icon: React.ReactNode;
  name: string;
}

const Dashboard = () => {
  const {
    openProjectWindowObject: { openProjectWindow },
    showComponentPageObject: { showComponentPage },
    openDeleteWindowObject: { openDeleteWindow },
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
      <ConfirmationDeletionWindow />
      <ComponentEditor />
      <Dropdown />
      <IconWindow onUpdateIconSelected={getTheIconSelected} />
      <AddProjectWindow selectedIcon={selectedIcon} />
      {(openProjectWindow || openDeleteWindow) && <DashboardOverlay />}
      <Sidebar />
      <div className="flex-grow">
        {!showComponentPage ? <ContentArea /> : <ComponentPage />}
      </div>
    </div>
  );
};

export default Dashboard;
