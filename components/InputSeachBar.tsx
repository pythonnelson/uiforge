"use client";

import { Input } from "@/components/ui/input";
import { useAppContext } from "@/context/ContextApi";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

export function InputSearchBar() {
  const {
    showSearchBarObject: { setShowSearchBar },
  } = useAppContext();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSearchBar(false);
  };
  return (
    <div className="px-2 flex justify-between items-center w-full">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search Component here..."
        className="w-full dark:bg-slate-950 outline-none text-[13px] placeholder:text-slate-400 bg-slate-100 focus:bg-slate-100 focus:outline-none"
      />
      <X
        className="w-4 h-4 flex-shrink-0 text-slate-500 text-[10px] cursor-pointer"
        onClick={handleCloseClick}
      />
    </div>
  );
}
