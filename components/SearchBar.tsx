"use client";

import { useAppContext } from "@/context/ContextApi";
import { SearchIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import SearchIconAndText from "./SearchIconAndText";
import { InputSearchBar } from "./InputSeachBar";

const SearchBar = () => {
  const {
    showSearchBarObject: { showSearchBar, setShowSearchBar },
  } = useAppContext();

  const searchBarRef = useRef<HTMLDivElement>(null);

  function handleClickSearchBar() {
    if (!showSearchBar) {
      setShowSearchBar(true);
    }
  }

  useEffect(() => {
    function handleClickOutSide(event: MouseEvent) {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setShowSearchBar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [setShowSearchBar]);

  return (
    <div
      ref={searchBarRef}
      onClick={handleClickSearchBar}
      className="bg-slate-100 dark:bg-slate-900 w-1/3 cursor-pointer hover:bg-slate-200 transition-all p-[8px] flex gap-1 justify-center items-center rounded-md"
    >
      {showSearchBar ? <InputSearchBar /> : <SearchIconAndText />}
    </div>
  );
};

export default SearchBar;
