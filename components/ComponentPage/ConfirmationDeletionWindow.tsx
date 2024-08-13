"use client";

import { useAppContext } from "@/context/ContextApi";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import { Component, Project } from "@/constants/data";
import toast from "react-hot-toast";

const ConfirmationDeletionWindow = () => {
  const {
    openDeleteWindowObject: { openDeleteWindow, setOpenDeleteWindow },
    allProjectsDataObject: { allProjects, setAllProjects },
    selectedProjectObject: { selectedProject },
    selectedComponentObject: { setSelectedComponent },
  } = useAppContext();

  function deleteComponentFunction() {
    try {
      // Delete the component from the selcted project
      if (selectedProject) {
        const updateSelectedProject = {
          ...selectedProject,
          components: selectedProject.components.filter(
            (component: Component) => component._id !== selectedProject?._id
          ),
        };
        // TODO: Fix this error
        setSelectedComponent(updateSelectedProject);
      }

      // Delete the component from allProjects
      const updatedAllProjects = allProjects.map((project: Project) => {
        if (project._id === selectedProject?._id) {
          return {
            ...project,
            components: project.components.filter(
              (component: Component) => component._id !== selectedProject?._id
            ),
          };
        }
        return project;
      });
      setAllProjects(updatedAllProjects);
      setOpenDeleteWindow(false);
      toast.success("Component deleted successfully");
    } catch (error) {
      toast.error("Component not deleted");
    }
  }

  return (
    <div
      style={{ visibility: openDeleteWindow ? "visible" : "hidden" }}
      className="w-[40%] max-sm:w-[90%] rounded-md absolute p-8 px-9 border border-slate-100 bg-white shadow-md left-1/3 top-1/3 right-1/3 z-50 zoom-in-75"
    >
      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-start">
        <div className="w-[42px] h-[42px] bg-red-200 rounded-full flex items-center justify-center">
          <DeleteIcon className="text-red-500 text-[16px]" />
        </div>
        <CloseIcon
          onClick={() => setOpenDeleteWindow(false)}
          sx={{ fontSize: 18 }}
          className="text-slate-400 text-[18px] cursor-pointer"
        />
      </div>

      {/* ==== CARD BODY ===== */}
      <div className="flex flex-col mt-7">
        <span className="font-bold">Deletion Comfirmation !!!</span>
        <span className="text-slate-400 text-[13px] mt-2">
          Are you sure you want to permanently delete this component ?
        </span>
        <span className="text-red-500 font-semibold mt-4 text-[13px]">
          This action cannot be undone
        </span>
      </div>

      {/* ===== BUTTONS ===== */}
      <div className="flex justify-end gap-4 mt-9 mb-2 text-[12px]">
        <button
          onClick={() => setOpenDeleteWindow(false)}
          className="px-4 py-2 text-slate-500 border border-slate-200 rounded-md transition-all duration-300 hover:bg-slate-300 hover:text-slate-900"
        >
          Cancel
        </button>
        <button
          onClick={deleteComponentFunction}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Proceed to Deletion
        </button>
      </div>
    </div>
  );
};

export default ConfirmationDeletionWindow;
