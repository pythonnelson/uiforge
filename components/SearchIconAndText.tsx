import { SearchIcon } from "lucide-react";
import React from "react";

const SearchIconAndText = () => {
  return (
    <>
      <SearchIcon fontSize={"small"} className="text-slate-500" />
      <span className="text-slate-500 text-sm">Search</span>
    </>
  );
};

export default SearchIconAndText;
