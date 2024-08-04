import Link from "next/link";
import React from "react";
import { auth } from "@clerk/nextjs/server";

const Buttons = () => {
  const { userId } = auth();
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
      {!userId ? (
        <>
          <Link href={"/sign-in"}>
            <button className="max-sm:w-full text-sm border font-bold border-[#1d7572] text-white bg-[#1d7572] p-[8px] rounded-md px-6 hover:bg-white hover:border-[#1d7572] transition-all duration-500 hover:text-[#1d7572]">
              Sign In
            </button>
          </Link>

          <Link href={"/sign-up"}>
            <button className="max-sm:w-full text-sm border border-[#1d7572] font-bold text-[#1d7572] p-[8px] rounded-md px-6 hover:bg-[#1d7572] hover:text-white transition-all duration-500">
              Sign Up
            </button>
          </Link>
        </>
      ) : (
        <Link href={"/dashboard"}>
          <button className="max-sm:w-full text-sm border font-bold border-[#1d7572] text-white bg-[#1d7572] p-[8px] rounded-md px-6 hover:bg-white hover:border-[#1d7572] transition-all duration-500 hover:text-[#1d7572]">
            Dashboard
          </button>
        </Link>
      )}
    </div>
  );
};

export default Buttons;
