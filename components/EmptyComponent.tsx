import React from "react";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

type EmptyComponentProps = {
  title: string;
  icon?: React.ReactNode;
  buttonText?: string;
};
const EmptyComponent = ({ title, icon, buttonText }: EmptyComponentProps) => {
  return (
    <div className="p-1 gap-5 flex flex-col justify-center w-full h-[200px] mt-[68px] mb-[34px] items-center">
      <HourglassEmptyIcon
        sx={{ fontSize: 80 }}
        className="text-[70px] text-slate-200"
      />
      <div className="">
        <h3 className="font-semibold text-[15px] mb-1 text-center">{`SORRY!, There are no projects yet!`}</h3>
        <p className="text-gray-400 w-full text-center text-[13px]">
          {title}
          {/* Please click the button below to create your first project */}
        </p>
      </div>
      {buttonText && (
        <button className="bg-slate-900 text-white gap-2 text-[12px] px-3 py-[5px] rounded-md transition-all duration-300 hover:text-[#1b6a88]">
          {icon} <span className="text-[13px]">{buttonText}</span>
        </button>
      )}
    </div>
  );
};

export default EmptyComponent;
