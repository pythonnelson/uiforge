import React from "react";
import Header from "../Projects/Header";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Favorite from "./Favorite";

const FavoriteComponent = () => {
  return (
    <div className="bg-white dark:bg-slate-950 w-full p-8 mt-4 rounded-lg">
      <Header
        title="Favorites"
        buttonTitle="View All"
        icon={<FavoriteIcon fontSize="small" className="text-red-500" />}
        buttonIcon={<VisibilityIcon fontSize="small" />}
      />

      {/* ===== TABLE HEADER ===== */}
      <div className="grid grid-cols-4 mt-6 mb-4 items-center text-slate-400 px-4 max-sm:grid-cols-2">
        <span>Component Name</span>
        <span className="max-sm:hidden">Created At</span>
        <span className="max-sm:hidden">Project</span>
        <span>Actions</span>
      </div>
      {/* ===== TABLE HEADER END ===== */}

      <div className="px-4 flex flex-col gap-1 mt-1">
        <Favorite />
        <Favorite />
        <Favorite />
        <Favorite />
        <Favorite />
        <Favorite />
      </div>
    </div>
  );
};

export default FavoriteComponent;
