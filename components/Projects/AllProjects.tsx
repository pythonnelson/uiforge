"use client";

import React from "react";
import Header from "./Header";
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
  } = useAppContext();
  return (
    <div className="bg-white dark:bg-slate-950 w-full p-8 mt-4 rounded-lg">
      <Header
        title="All Projects"
        optionTitle="More"
        icon={<ArrowRightAltIcon fontSize="small" />}
        buttonTitle="New Project"
        buttonIcon={<AddIcon fontSize="small" />}
      />
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
