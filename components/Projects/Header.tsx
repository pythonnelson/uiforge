import React from "react";

type HeaderProps = {
  title: string;
  optionTitle?: string;
  buttonTitle?: string;
  icon?: React.ReactNode;
  buttonIcon?: React.ReactNode;
};

const Header = ({
  title,
  optionTitle,
  buttonTitle,
  icon,
  buttonIcon,
}: HeaderProps) => {
  return (
    <div>
      <span className="text-lg flex gap-2 justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="font-bold text-lg">{title}</span>
          <span className="text-[14px] text-[#1b6a88] cursor-pointer">
            {optionTitle}
            {icon && <span>{icon}</span>}
          </span>
        </div>

        <button className="bg-slate-900 text-white gap-2 text-[12px] px-3 py-[2px] rounded-md transition-all duration-300 hover:text-[#1b6a88]">
          {buttonIcon && <span>{buttonIcon}</span>}{" "}
          <span className="text-[13px]">{buttonTitle}</span>
        </button>
      </span>
    </div>
  );
};

export default Header;
