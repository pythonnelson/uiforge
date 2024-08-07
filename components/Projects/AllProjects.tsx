import React from "react";
import Header from "./Header";
import ProjectsCard from "./ProjectCard";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AddIcon from "@mui/icons-material/Add";

const AllProjects = () => {
  return (
    <div className="bg-white dark:bg-slate-950 w-full p-8 mt-4 rounded-lg">
      <Header
        title="All Projects"
        optionTitle="More"
        buttonTitle="New Project"
        icon={<ArrowRightAltIcon fontSize="small" />}
        buttonIcon={<AddIcon fontSize="small" />}
      />
      {/* ===== PROJECT CARDS ===== */}
      <div className="flex flex-wrap gap-4 mt-7 max-sm:grid max-sm:grid-cols-1">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
      {/* ===== PROJECT CARDS END ===== */}
    </div>
  );
};

export default AllProjects;
