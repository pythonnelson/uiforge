"use client";

import React from "react";
import Header from "../Projects/Header";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Favorite from "./Favorite";
import { useAppContext } from "@/context/ContextApi";
import EmptyComponent from "../EmptyComponent";
import { LoadingSkeleton } from "../LoadingSkeleton";

const FavoriteComponent = () => {
  const {
    allFavoriteComponentsObjects: { allFavoriteComponents },
    isLoadingObject: { isLoading },
  } = useAppContext();
  return (
    <div className="bg-white dark:bg-slate-950 w-full p-8 mt-4 rounded-lg">
      {/* TODO: Disable VIEW ALL button if there are no favorite */}
      <Header
        title="Favorites"
        buttonTitle="View All"
        icon={<FavoriteIcon fontSize="small" className="text-red-500" />}
        buttonIcon={<VisibilityIcon fontSize="small" />}
      />

      {/* ===== TABLE HEADER ===== */}
      {!isLoading && allFavoriteComponents.length !== 0 && (
        <div className="grid grid-cols-4 mt-6 mb-4 items-center text-slate-400 px-4 max-sm:grid-cols-2">
          <span>Component Name</span>
          <span className="max-sm:hidden">Created At</span>
          <span className="max-sm:hidden">Project</span>
          <span>Actions</span>
        </div>
      )}
      {/* ===== TABLE HEADER END ===== */}

      {/* ===== TABLE DATA ===== */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center h-[200px] w-full mt-16">
          <LoadingSkeleton />
          <span className="text-slate-400 text-sm mt-[5px]">Loading...</span>
        </div>
      )}

      {!isLoading && allFavoriteComponents.length === 0 ? (
        <EmptyComponent title="There are not favorite projects yet, try to like one or more.." />
      ) : (
        <div className="px-4 flex flex-col gap-1 mt-1">
          {allFavoriteComponents.slice(0, 5).map((component, index) => (
            <div key={index}>
              <Favorite component={component} />
            </div>
          ))}
        </div>
      )}

      {/* ===== TABLE DATA END ===== */}
    </div>
  );
};

export default FavoriteComponent;
