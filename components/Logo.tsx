import React from "react";
import { SiReact } from "react-icons/si";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-[#1d7572] flex items-center p-[6px] rounded-md">
        <div className="w-[26px] h-[26px] items-center justify-center flex">
          <SiReact className="text-white text-[22px]" />
        </div>
      </div>

      <div className="flex gap-1 text-[22px]">
        <span className="font-bold">UI</span>
        <span className="text-[#1d7572] font-extrabold">Forge</span>
      </div>
    </div>
  );
};

export default Logo;
