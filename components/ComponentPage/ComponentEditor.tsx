"use client";

import React, { useState, useEffect, useRef } from "react";
import { useAppContext } from "@/context/ContextApi";
import AceEditor from "react-ace";
import CloseIcon from "@mui/icons-material/Close";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import AppsIcon from "@mui/icons-material/Apps";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import prettier from "prettier/standalone";
import babelPlugin from "prettier/plugins/babel";
import estreePlugin from "prettier/plugins/estree";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/ext-language_tools";
import { Save } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Checkbox from "@mui/material/Checkbox";
import CodeIcon from "@mui/icons-material/Code";
import toast from "react-hot-toast";
import { Component } from "@/constants/data";
import { v4 as uuidv4 } from "uuid";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { IconButton } from "@mui/material";

const ComponentEditor = () => {
  const [code, setCode] = useState(``);
  const [inputName, setInputName] = useState<string>("");
  const aceEditorRef = useRef<AceEditor | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const {
    openComponentEditorObject: { openComponentEditor, setOpenComponentEditor },
    allProjectsDataObject: { allProjects, setAllProjects },
    selectedProjectObject: { selectedProject, setSelectedProject },
    selectedComponentObject: { selectedComponent, setSelectedComponent },
  } = useAppContext();
  const editorInstanceRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatCode = async (codeToFormat: string) => {
    if (aceEditorRef.current) {
      try {
        const formatted = await prettier.format(code, {
          parser: "babel",
          plugins: [babelPlugin, estreePlugin],
          singleQuote: true,
          trailingComma: "all",
          // tabWidth: 2,
          // useTabs: false,
          // bracketSpacing: true,
          // arrowParens: "always"
        });
        setCode(formatted);
        aceEditorRef.current.editor.setValue(formatted, 1);
      } catch (error) {
        console.log("Formating code failed: ", error);
      }
    }
  };

  const handleChange = (newValue: string) => {
    setCode(newValue);
  };

  function saveComponent() {
    // Check if the project name is not empty
    if (inputName.trim() === "") {
      toast.error("Please provide a component name");
      inputRef.current?.focus();
      return;
    }

    // Check if the code is empty or not
    if (code.trim() === "") {
      toast.error("Please provide a component code");
      aceEditorRef.current?.editor.focus();
      return;
    }

    // Check if a project is selected
    if (!selectedProject) {
      toast.error("Please select a project");
      return;
    }

    // If no component is selected
    if (!selectedComponent) {
      // Create a new component
      const newComponent: Component = {
        _id: uuidv4(),
        name: inputName,
        code: code,
        isFavorite: false,
        createdAt: new Date().toISOString(),
        projectName: selectedProject.name,
      };

      // Check if the component already exists
      if (
        selectedProject.components.some(
          (component) =>
            component.name.toLowerCase() === inputName.toLowerCase()
        )
      ) {
        toast.error("Component name already exists");
        return;
      }

      addNewComponent(newComponent);
      setSelectedComponent(newComponent);
      toast.success("Component created successfully");
      formatCode(newComponent.code);
    } else {
      // Update the existing component
      const updatedComponent: Component = {
        ...selectedProject,
        name: inputName,
        code: code,
        // isFavorite: isFavorite,
        // projectName: projectName
      };

      // Check if the component conflicts with another component
      if (
        selectedProject.components.some(
          (component) =>
            component._id !== selectedComponent?._id &&
            component.name.toLowerCase() === inputName.toLowerCase()
        )
      ) {
        toast.error("Component name already exists in this project");
        return;
      }
      updateExistingComponent(updatedComponent);
      setSelectedComponent(updatedComponent);
      toast.success("Component updated successfully");
    }
  }

  function addNewComponent(newComponent: Component) {
    if (selectedProject && allProjects) {
      const updatedProject = {
        ...selectedProject,
        components: [...selectedProject.components, newComponent],
      };

      const updatedAllProjects = allProjects.map((project) =>
        project._id === selectedProject._id ? updatedProject : project
      );

      setSelectedProject(updatedProject);
      setAllProjects(updatedAllProjects);
    }
  }

  function updateExistingComponent(updatedComponent: Component) {
    if (selectedProject && allProjects) {
      const updatedComponents = selectedProject.components.map((component) =>
        component._id === updatedComponent._id ? updatedComponent : component
      );

      const updatedProject = {
        ...selectedProject,
        components: updatedComponents,
      };

      const updatedAllProjects = allProjects.map((project) =>
        project._id === selectedProject._id ? selectedProject : project
      );

      setSelectedProject(updatedProject);
      setAllProjects(updatedAllProjects);
    }
  }

  function copyCode() {
    // Copy code to clipboard
    setCopySuccess(true);
    toast.success("Code successfully copied");
    setTimeout(() => {
      navigator.clipboard.writeText(code);
      setCopySuccess(false);
    }, 1400);
  }

  useEffect(() => {
    if (openComponentEditor) {
      inputRef.current?.focus();
      if (!selectedComponent) {
        resetEditor();
      } else {
        setInputName(selectedComponent.name);
        setCode(selectedComponent.code);
        if (editorInstanceRef.current) {
          editorInstanceRef.current.editor.setValue(code, -1);
          formatCode(selectedComponent.code);
        }
      }
    } else {
      resetEditor();
    }
  }, [openComponentEditor, selectedComponent]);

  const resetEditor = () => {
    setCode("");
    setInputName("");
    if (editorInstanceRef.current) {
      editorInstanceRef.current.setValue("", -1);
    }
  };

  return (
    <div
      style={{ display: openComponentEditor ? "flex" : "none" }}
      className="w-[96%] h-[735px] max-sm:h-[90%] max-sm:flex-col items-center justify-center border-slate-100 flex-row overflow-hidden bg-white absolute top-2 rounded-2xl shadow-md z-50 -translate-x-0"
    >
      {/* ==== LEFT SIDE ==== */}
      <div className="w-1/2 max-sm:w-full h-full">
        {/* === HEADER === */}
        <div className="flex justify-between items-center pt-7 px-8">
          <div className="flex items-center gap-2">
            {/* === CATEGORY ICON ==== */}
            <div className="w-[30px] h-[30px] bg-[#9bd8f0] rounded-full flex items-center justify-center">
              <FormatShapesIcon
                sx={{ fontSize: 17 }}
                className="text-[#1b6a88]"
              />
            </div>

            {/* === CATEGORY HEADER === */}
            <span className="font-semibold">Component Editor</span>
          </div>
          {/* === CLOSE ICON ==== */}
          <CloseIcon
            onClick={() => {
              setOpenComponentEditor(false);
              setSelectedComponent(null);
              resetEditor();
            }}
            sx={{ fontSize: 16 }}
            className="text-slate-400 text-[18px] cursor-pointer"
          />
        </div>

        {/* === INPUT NAME ==== */}
        <div className="flex flex-col gap-2 pt-12 px-8">
          {/* === LABEL === */}
          <div className="flex gap-3">
            <span className="flex gap-1 items-center text-[13px]">
              <TextFieldsIcon className="text-[15px]" />
              <span>Component Name</span>
            </span>

            <div>
              <Checkbox icon={<FavoriteBorderIcon sx={{ fontSize: 19 }} />} />
            </div>
          </div>

          {/* === INPUT === */}
          <div className="flex gap-3">
            <input
              ref={inputRef}
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Enter Component Name"
              className="p-[10px] text-[12px] w-full rounded-md border outline-none"
            />
          </div>
        </div>
        {/* === INPUT CODE === */}
        <div className="flex flex-col gap-2 pt-6 px-8">
          <div className="flex justify-between">
            {/* === INPUT LABEL === */}
            <span className="flex gap-1 items-center text-[13px]">
              <CodeIcon className="text-[15px] font-bold" />
              <span>JSX Code</span>
            </span>

            <IconButton onClick={copyCode}>
              {!copyCode ? (
                <ContentCopyIcon sx={{ fontSize: 17 }} />
              ) : (
                <DoneAllIcon sx={{ fontSize: 17 }} />
              )}
            </IconButton>

            <button
              onClick={saveComponent}
              //   onClick={() => saveCode(code)}
              className="bg-sky-500 hover:bg-sky-600 text-white text-[12px] p-2 rounded-md transition-all"
            >
              <Save sx={{ fontSize: 17 }} />
            </button>
          </div>

          <div className="border border-slate-200 rounded-md relative mt-1">
            {/* === COPY BUTTON ==== */}
            <AceEditor
              ref={aceEditorRef}
              onLoad={(editorInstance) =>
                (editorInstanceRef.current = editorInstance)
              }
              mode="jsx"
              //   theme="solarized_dark"
              theme="Dreamweaver"
              onChange={handleChange}
              name="jsxEditor"
              value={code}
              editorProps={{ $blockScrolling: true }}
              cursorStart={1}
              defaultValue="Console.log('Your code goes here')"
              setOptions={{
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
                enableBasicAutocompletion: true,
                enableAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippetsAutoTrigger: true,

                // fontSize: 14,
                // fontFamily: "Poppins",
                // lineHeight: "1.5",
                useSoftTabs: true,
                highlightActiveLine: true,
                showPrintMargin: true,
                printMarginColumn: 80,
                showGutter: true,
                enableLiveAutocompletionItemHover: true,
                enableFormatOnPaste: true,
                autoScrollEditorIntoView: true,
                autoScrollEditorIntoViewDelay: 400,
                autoCompleteDelay: 300,
                autoCompleteMinChars: 1,
                autoCompleteMaxResults: 5,
                autoCompleteSelectFirst: true,
              }}
              fontSize={14}
              width="100%"
              height="440px"
            />
          </div>
        </div>
      </div>

      {/* === RIGHT PART === */}
      <div className="w-1/2 max-sm:w-full max-sm:border-t border-1 max-sm:mt-5 border-slate-100 h-full">
        <LiveProvider code={code} noInline={false}>
          <div className="">
            <LiveError className="rounded-lg text-red-500 border-gray-200 pt-4" />
            <LivePreview className="rounded-lg border-gray-200" />
          </div>
        </LiveProvider>
      </div>
    </div>
  );
};

export default ComponentEditor;
