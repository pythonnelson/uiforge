import ContentArea from "@/components/ContentArea";
import Sidebar from "@/components/Sidebar";
import { AppProvider } from "@/context/ContextApi";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen">
      <AppProvider>
        <Sidebar />
        <div className="flex-grow">
          <ContentArea />
        </div>
      </AppProvider>
    </div>
  );
};

export default page;
