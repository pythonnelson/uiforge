import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import DialpadIcon from "@mui/icons-material/Dialpad";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";

export function TextToIcon({
  text,
  size,
}: {
  text: string;
  size?: "small" | "medium" | "large";
}) {
  switch (text) {
    case "CategoryIcon":
      return (
        <CategoryIcon
          fontSize={size}
          className="bg-blue-200 text-[30px] text-[#1b6a88]"
        />
      );
    case "DynamicFormIcon":
      return (
        <DynamicFormIcon
          fontSize={size}
          className="bg-blue-200 text-[30px] text-[#1b6a88]"
        />
      );

    case "DialpadIcon":
      return (
        <DialpadIcon
          fontSize={size}
          className="bg-blue-200 text-[30px] text-[#1b6a88]"
        />
      );

    case "KeyboardCommandKeyIcon":
      return (
        <KeyboardCommandKeyIcon
          fontSize={size}
          className="bg-blue-200 text-[30px] text-[#1b6a88]"
        />
      );

    default:
      return (
        <SmartButtonIcon
          fontSize={size}
          className="bg-blue-200 text-[30px] text-[#1b6a88]"
        />
      );
  }
}
