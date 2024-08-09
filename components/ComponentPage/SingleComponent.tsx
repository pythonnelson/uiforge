"use client";

import React, { useState } from "react";
import PreviewIcon from "@mui/icons-material/Preview";
import CodeIcon from "@mui/icons-material/Code";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVerticalIcon from "@mui/icons-material/MoreVert";
import { LiveError, LivePreview, LiveProvider } from "react-live";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierSulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SingleComponent = () => {
  const [code, setCode] = useState(`
        <div className="p-4 bg-blue-50 rounded-lg w-full">
            <h1 className="text-2xl font-bold text-blue-500">Hello, Isaac Nelson</h1>
            <p className="mt-2 text-gray-600">Edit this code to see live changes</p>
        </div>
    `);
  const [theme, setTheme] = useState("github");
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

  function changeTabState(index: number) {
    setTabMenu((prevTabMenu) => {
      return prevTabMenu.map((singleItem, i) => {
        return i === index
          ? { ...singleItem, isSelected: true }
          : { ...singleItem, isSelected: false };
      });
    });
  }
  return (
    <div className="bg-white w-full rounded-lg p-8 pt-8 pb-10 mb-3">
      {/* ==== TITLE === */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-[19px]">Outline Buttons</span>
          <IconButton>
            <FavoriteBorderIcon className="text-slate-400 text-[20px]" />
          </IconButton>
        </div>
        <IconButton>
          <MoreVerticalIcon className="text-slate-400 text-[20px]" />
        </IconButton>
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
          <LiveProvider code={code} noInline={false}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LiveError className="rounded-lg border-slate-200 p-4 text-red-500" />
              <LivePreview className="rounded-lg border-slate-200 p-4" />
            </div>
          </LiveProvider>
        </div>
      ) : (
        <div className="border rounded-md mt-6 w-full">
          <SyntaxHighlighter
            language={"javascript"}
            style={atelierSulphurpoolLight}
            wrapLines={true}
            wrapLongLines={true}
            showLineNumbers={true}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
      {/* ==== COMPONENT END ==== */}
      {/* ===== COMPONENT PREVIEW AND CODE BUTTON END ==== */}
    </div>
  );
};

export default SingleComponent;
