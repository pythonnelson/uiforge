"use client";

import React, { useEffect, useRef, useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";
import CloseIcon from "@mui/icons-material/Close";
import IceSkatingIcon from "@mui/icons-material/IceSkating";
import { useAppContext } from "@/context/ContextApi";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckIcon from "@mui/icons-material/Check";
import { v4 as uuidv4 } from "uuid";
import { Project } from "@/constants/data";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

const AddProjectWindow = ({
  selectedIcon,
}: {
  selectedIcon: {
    icon: React.ReactNode;
    name: string;
  };
}) => {
  const { user } = useUser();
  const {
    isMobileViewObject: { isMobileView },
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
    openIconWindowObject: { openIconWindow, setOpenIconWindow },
    allProjectsDataObject: { allProjects, setAllProjects },
  } = useAppContext();

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [openProjectWindow]);

  function handleInputUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    setErrorMessage("");
    setProjectName(e.target.value);
  }

  function addNewProject() {
    // Check if the project name is not empty
    if (projectName.trim() === "") {
      setErrorMessage("Project name cannot be empty");
      inputRef.current?.focus();
      return;
    }

    // Check if the project name already exists
    if (
      allProjects.find(
        (project) =>
          project.name.toLocaleLowerCase() === projectName.toLocaleLowerCase()
      )
    ) {
      setErrorMessage("Project name already exists");
      inputRef.current?.focus();
      return;
    }

    // Add new project
    const newProject: Project = {
      _id: uuidv4(),
      clerkUserId: user?.id as string,
      // clerkUserId: "1",
      name: projectName,
      icon: selectedIcon.icon,
      createdAt: new Date().toISOString(),
      components: [],
    };
    try {
      setAllProjects([...allProjects, newProject]);
      toast.success("Projects created successfully", {
        icon: <CheckIcon />,
      });
      setErrorMessage("");
      setProjectName("");
      setOpenProjectWindow(false);
    } catch (error) {
      toast.error("Failed to add project", {
        icon: <ErrorOutlineIcon />,
      });
      console.log(error);
    }
    // allProjects.push(newProject);
    // setOpenProjectWindow(false);
    // setOpenIconWindow(false);
    // setErrorMessage("");
  }
  return (
    <div
      className={`${
        isMobileView ? "w-[80%]" : "w-[40%]"
      } border border-slate-50 bg-white dark:bg-slate-950 rounded-md shadow-md absolute left-1/2 top-24 -translate-x-1/2 z-50 ${
        openProjectWindow ? "absolute" : "hidden"
      }`}
    >
      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center pt-7 px-7">
        <div className="flex items-center gap-2">
          {/* ===== PROJECT ICON ===== */}
          <div className="w-[30px] h-[30px] bg-blue-200 rounded-full flex items-center justify-center">
            <CategoryIcon sx={{ fontSize: 17 }} className="text-blue-400" />
          </div>
          <span className="font-semibold text-lg">New Project</span>
          {/* ===== PROJECT ICON END ===== */}
        </div>
        {/* <ShieldCloseIcon /> */}
        <CloseIcon
          onClick={() => setOpenProjectWindow(false)}
          sx={{ fontSize: 16 }}
          className="text-slate-400 text-[18px] cursor-pointer"
        />
      </div>
      {/* ===== HEADER END ===== */}

      {/* ===== BODY =====  */}
      <div className="flex flex-col gap-2 mt-11 px-7">
        <span className="text-[13px] font-medium">Project Name</span>
        <div className="flex gap-3">
          <input
            value={projectName}
            onChange={handleInputUpdate}
            ref={inputRef}
            placeholder="Enter Project Name"
            className="p-[10px] text-[12px] w-full rounded-md border outline-none"
          />

          {/* ===== ICON ===== */}
          <div
            onClick={() => setOpenIconWindow(true)}
            className="w-12 h-10 text-white flex items-center justify-center bg-[#1b6a88] rounded-lg cursor-pointer"
          >
            {selectedIcon?.icon ? (
              selectedIcon?.icon
            ) : (
              <IceSkatingIcon sx={{ fontSize: 18 }} className="text-[18px]" />
            )}
            {/* <IceSkatingIcon sx={{ fontSize: 18 }} className="text-[18px]" /> */}
          </div>
          {/* ===== ICON END ===== */}
        </div>
        {/* ===== ERROR MESSAGE ===== */}
        <div
          className={`flex items-center gap-2 mt-1 ${
            errorMessage ? "" : "hidden"
          }`}
        >
          <ErrorOutlineIcon sx={{ fontSize: 14 }} className="text-red-500" />
          <span className="text-[12px] text-red-500 mt-1">{errorMessage}</span>
        </div>
        {/* ===== ERROR MESSAGE END ===== */}
      </div>
      {/* ===== BODY END =====  */}

      {/* ===== FOOTER ===== */}
      <div className="w-full mt-11 mb-5 flex gap-3 justify-end px-7 items-center">
        {/* ===== CANCEL BUTTON ===== */}
        <button
          onClick={() => setOpenProjectWindow(false)}
          className="border border-slate-200 text-slate-400 text-[12px] p-2 px-6 rounded-md hover:border-slate-300 translation-all duration-300 hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          onClick={addNewProject}
          className="bg-[#1b6a88] hover:bg-[#0e475e] text-white text-[12px] p-2 px-3 rounded-md transition-all duration-300"
        >
          Add Project
        </button>
        {/* ===== CANCEL BUTTON END ===== */}
      </div>
      {/* ===== FOOTER END===== */}
    </div>
  );
};

export default AddProjectWindow;
