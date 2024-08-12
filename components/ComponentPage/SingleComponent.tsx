"use client";

import React, { useRef, useState } from "react";
import PreviewIcon from "@mui/icons-material/Preview";
import CodeIcon from "@mui/icons-material/Code";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVerticalIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { LiveError, LivePreview, LiveProvider } from "react-live";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atelierSulphurpoolLight,
  stackoverflowLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Component, Project } from "@/constants/data";
import Checkbox from "@mui/material/Checkbox";
import { useAppContext } from "@/context/ContextApi";

const SingleComponent = ({ component }: { component: Component }) => {
  const {
    selectedProjectObject: { selectedProject, setSelectedProject },
    allProjectsDataObject: { allProjects, setAllProjects },
    dropDownPositionObject: { dropDownPositions, setDropDownPositions },
    openDropDownObject: { openDropdown, setOpenDropdown },
  } = useAppContext();
  // const [code, setCode] = useState(component.code);
  // const [theme, setTheme] = useState("github");
  const [tabMenu, setTabMenu] = useState([
    {
      id: 1,
      icon: <PreviewIcon className="text-[19px]" />,
      name: "Preview",
      isSelected: true,
    },
    {
      id: 2,
      icon: <CodeIcon className="text-[19px]" />,
      name: "Jsx",
      isSelected: false,
    },
  ]);
  const [isFavorite, setFavorite] = useState(component.isFavorite);
  const iconRef = useRef<HTMLDivElement>(null);

  function changeTabState(index: number) {
    setTabMenu((prevTabMenu) => {
      return prevTabMenu.map((singleItem, i) => {
        return i === index
          ? { ...singleItem, isSelected: true }
          : { ...singleItem, isSelected: false };
      });
    });
  }

  function openTheDropDown(event: React.MouseEvent) {
    event.stopPropagation();
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      const top = rect.top;
      const left = rect.left;

      // Open the drop down
      setOpenDropdown(true);
      setDropDownPositions({ top: top, left: left });
    }
  }

  function updateFavoriteState() {
    const newAllProjects = allProjects.map((project: Project) => {
      const updatedComponents = project.components.map((comp: Component) => {
        if (comp._id === component._id) {
          return {
            ...comp,
            isFavorite: !comp.isFavorite,
          };
        }
        return comp;
      });

      if (updatedComponents !== project.components) {
        return { ...project, components: updatedComponents };
      }
      return project;
    });

    // Update the component array in the selectedProject
    if (selectedProject) {
      const updatedSelectedProject = newAllProjects.find(
        (project: Project) => project._id === selectedProject._id
      );

      if (updatedSelectedProject) {
        setSelectedProject(updatedSelectedProject);
      }
    }

    setFavorite(!isFavorite);
    setAllProjects(newAllProjects);
  }

  return (
    <div className="bg-white w-full rounded-lg p-8 pt-8 pb-10 mb-3">
      {/* ==== TITLE === */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-[19px] dark:text-slate-700">
            {component?.name}
          </span>
          <Checkbox
            onChange={updateFavoriteState}
            checked={isFavorite}
            icon={<FavoriteBorderIcon className="text-slate-400 text-[20px]" />}
            checkedIcon={<FavoriteIcon className="text-red-500 text-[20px]" />}
          />
        </div>
        <div onClick={openTheDropDown} ref={iconRef}>
          <IconButton>
            <MoreVerticalIcon className="text-slate-400 text-[20px]" />
          </IconButton>
        </div>
      </div>
      {/* ==== TITLE END === */}

      {/* ===== COMPONENT PREVIEW AND CODE BUTTON ==== */}
      <div className="flex gap-2 mt-2 text-[13px]">
        {/* ===== PREVIEW === */}
        {tabMenu.map((tab, index) => (
          <div
            key={index}
            onClick={() => changeTabState(index)}
            className={`flex gap-1 items-center cursor-pointer select-none text-slate-400 px-3 py-[4px] rounded-md transition-all duration-300 ${
              tab.isSelected
                ? "bg-[#1b6a88] text-white"
                : "hover:bg-slate-200 hover:text-[#1b6a88]"
            }`}
          >
            {tab.icon}
            <span className="mt-[2px]">{tab.name}</span>
          </div>
        ))}
        {/* ===== PREVIEW END === */}
      </div>

      {/* ==== COMPONENT ==== */}
      {tabMenu[0].isSelected ? (
        <div className="w-full border rounded-md border-slate-200 mt-6">
          <LiveProvider code={component.code} noInline={false}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LiveError className="rounded-lg border-slate-200 p-4 text-red-500" />
              <LivePreview className="rounded-lg border-slate-200 p-4" />
            </div>
          </LiveProvider>
        </div>
      ) : (
        <div className="border border-slate-200 rounded-md mt-6 w-full">
          <SyntaxHighlighter
            language={"javascript"}
            style={atelierSulphurpoolLight}
            wrapLines={true}
            wrapLongLines={true}
            // showLineNumbers={true}
          >
            {component.code}
          </SyntaxHighlighter>
        </div>
      )}
      {/* ==== COMPONENT END ==== */}
      {/* ===== COMPONENT PREVIEW AND CODE BUTTON END ==== */}
    </div>
  );
};

export default SingleComponent;
