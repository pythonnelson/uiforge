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
            <button className="max-sm:w-full text-sm border font-bold border-[#1B6A88] text-white bg-[#1B6A88] p-[8px] rounded-md px-6 hover:bg-white hover:border-[#1B6A88] transition-all duration-500 hover:text-[#1B6A88]">
              Sign In
            </button>
          </Link>

          <Link href={"/sign-up"}>
            <button className="max-sm:w-full text-sm border border-[#1B6A88] font-bold text-[#1B6A88] p-[8px] rounded-md px-6 hover:bg-[#1B6A88] hover:text-white transition-all duration-500">
              Sign Up
            </button>
          </Link>
        </>
      ) : (
        <Link href={"/dashboard"}>
          <button className="max-sm:w-full text-sm border font-bold border-[#1B6A88] text-white bg-[#1B6A88] p-[8px] rounded-md px-6 hover:bg-white hover:border-[#1B6A88] transition-all duration-500 hover:text-[#1B6A88]">
            Dashboard
          </button>
        </Link>
      )}
    </div>
  );
};

export default Buttons;
