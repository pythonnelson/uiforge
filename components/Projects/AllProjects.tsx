"use client";

import React from "react";
import ProjectsCard from "./ProjectCard";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AddIcon from "@mui/icons-material/Add";
import { useAppContext } from "@/context/ContextApi";
import { LoadingSkeleton } from "../LoadingSkeleton";
import EmptyComponent from "../EmptyComponent";

const AllProjects = () => {
  const {
    allProjectsDataObject: { allProjects },
    isLoadingObject: { isLoading },
    openProjectWindowObject: { setOpenProjectWindow },
  } = useAppContext();
  return (
    <div className="bg-white dark:bg-slate-950 w-full p-8 mt-4 rounded-lg">
      <span className="text-lg flex gap-2 justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="font-bold text-lg">All Projects</span>
          <span className="text-[14px] text-[#1b6a88] cursor-pointer">
            More
            <ArrowRightAltIcon fontSize="small" />
          </span>
        </div>

        <button
          onClick={() => setOpenProjectWindow(true)}
          className="bg-slate-900 text-white gap-2 text-[12px] px-3 py-[2px] rounded-md transition-all duration-300 hover:text-[#1b6a88]"
        >
          <AddIcon fontSize="small" />{" "}
          <span className="text-[13px]">New Project</span>
        </button>
      </span>
      {/* ===== PROJECT CARDS ===== */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center h-[200px] w-full mt-16">
          <LoadingSkeleton />
          <span className="text-slate-400 text-sm mt-[5px]">Loading...</span>
        </div>
      )}

      {!isLoading && allProjects.length === 0 ? (
        <EmptyComponent
          title="Please click the button below to create your first project"
          icon={<AddIcon fontSize="small" />}
          buttonText="New Project"
        />
      ) : (
        <div className="flex flex-wrap gap-4 mt-7 max-sm:grid max-sm:grid-cols-1">
          {allProjects?.map((project, index) => {
            return (
              <div key={index}>
                <ProjectsCard singleProject={project} />
              </div>
            );
          })}
        </div>
      )}

      {/* ===== PROJECT CARDS END ===== */}
    </div>
  );
};

export default AllProjects;
