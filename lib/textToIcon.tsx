import React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import DialpadIcon from "@mui/icons-material/Dialpad";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";

export function TextToIcon({
  text,
  size,
  fontSize,
  className,
}: {
  text: any;
  size?: "small" | "medium" | "large";
  fontSize?: number;
  className?: string;
}) {
  // TODO: Add more icons here (All icons from the IconComponent should be here as well)
  switch (text) {
    case "CategoryIcon":
      return (
        <CategoryIcon
          fontSize={size}
          sx={{ fontSize: fontSize }}
          className={`bg-blue-200 text-[30px] text-[#1b6a88] ${className}`}
        />
      );
    case "DynamicFormIcon":
      return (
        <DynamicFormIcon
          fontSize={size}
          sx={{ fontSize: fontSize }}
          className={`bg-blue-200 text-[30px] text-[#1b6a88] ${className}`}
        />
      );

    case "DialpadIcon":
      return (
        <DialpadIcon
          fontSize={size}
          sx={{ fontSize: fontSize }}
          className={`bg-blue-200 text-[30px] text-[#1b6a88] ${className}`}
        />
      );

    case "KeyboardCommandKeyIcon":
      return (
        <KeyboardCommandKeyIcon
          fontSize={size}
          sx={{ fontSize: fontSize }}
          className={`bg-blue-200 text-[30px] text-[#1b6a88] ${className}`}
        />
      );

    default:
      return (
        <SmartButtonIcon
          fontSize={size}
          sx={{ fontSize: fontSize }}
          className={`bg-blue-200 text-[30px] text-[#1b6a88] ${className}`}
        />
      );
  }
}
