import React from "react";
import { StatisticsCard } from "./StatsCard";

const CategoriesCard = ({ singleCard }: { singleCard: StatisticsCard }) => {
  return (
    <div className="flex gap-4 items-center p-4 bg-white dark:bg-slate-950 rounded-lg">
      <div className="w-[45px] h-[45px] bg-[#abe1f7] rounded-full flex items-center justify-center max-md:hidden">
        {singleCard.icon}
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-2xl">{singleCard.count}</span>
        <span className="text-sm font-light text-slate-400 max-sm:text-[11px]">
          {singleCard.name}
        </span>
      </div>
    </div>
  );
};

export default CategoriesCard;
