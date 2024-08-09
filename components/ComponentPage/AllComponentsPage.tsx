"use client";

import React from "react";
import SingleComponent from "./SingleComponent";
import { useAppContext } from "@/context/ContextApi";
import { Component } from "@/constants/data";

const AllComponentsPage = () => {
  const {
    selectedProjectObject: { selectedProject },
  } = useAppContext();
  return (
    <div className="mt-10 flex flex-col gap-3">
      {selectedProject?.components.map(
        (component: Component, index: number) => (
          <div key={index}>
            <SingleComponent component={component} />
          </div>
        )
      )}
    </div>
  );
};

export default AllComponentsPage;
