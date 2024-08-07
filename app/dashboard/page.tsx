import Sidebar from "@/components/Sidebar";
import { AppProvider } from "@/context/ContextApi";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div>
      <AppProvider>
        <Sidebar />
      </AppProvider>
    </div>
  );
};

export default page;
