"use client";

import React, { useState } from "react";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CategoryIcon from "@mui/icons-material/Category";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CategoriesCard from "./CategoriesCard";

export interface StatisticsCard {
  id: number;
  name: string;
  icon: React.ReactNode;
  count: number;
}

const StatsCard = () => {
  const [statisticsCard, setStatisticsCard] = useState<StatisticsCard[]>([
    {
      id: 1,
      name: "Projects Created",
      icon: <AccountTreeIcon className="text-[#1b6a88]" />,
      count: 10,
    },
    {
      id: 2,
      name: "Components Added",
      icon: <CategoryIcon className="text-[#1b6a88]" />,
      count: 5,
    },
    {
      id: 3,
      name: "Favourites Components",
      icon: <FavoriteIcon className="text-[#1b6a88]" />,
      count: 30,
    },
  ]);
  return (
    <div className="mt-8">
      <div className="grid grid-cols-3 gap-4 rounded-lg mt-2">
        {statisticsCard.map((card, index) => {
          return (
            <div key={index}>
              <CategoriesCard singleCard={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsCard;
