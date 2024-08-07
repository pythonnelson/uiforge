"use client";

import { Heart } from "lucide-react";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { FaList } from "react-icons/fa";
import { HiOutlineViewGridAdd } from "react-icons/hi";

export interface MenuItem {
  id: string;
  name: string;
  icon: ReactNode;
  isSelected: boolean;
}

// Define the shape of the context state
interface AppContextType {
  menuItemsObject: {
    menuItems: MenuItem[];
    setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  };
  openSideBarObject: {
    openSideBar: boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

// Create a default state
const defaultState: AppContextType = {
  menuItemsObject: {
    menuItems: [],
    setMenuItems: () => {},
  },
  openSideBarObject: {
    openSideBar: true,
    setOpenSideBar: () => {},
  },
};

// Create the context with the default values
const AppContext = createContext<AppContextType>(defaultState);

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: "1",
      name: "Dashboard",
      icon: <FaList className="w-4 h-4 flex-shrink-0" />,
      isSelected: true,
    },
    {
      id: "2",
      name: "Projects",
      icon: <HiOutlineViewGridAdd className="w-4 h-4 flex-shrink-0" />,
      isSelected: false,
    },
    {
      id: "3",
      name: "Favourites",
      icon: <Heart className="w-4 h-4 flex-shrink-0" />,
      isSelected: false,
    },
  ]);

  const [openSideBar, setOpenSideBar] = useState(() => {
    const storedValue = localStorage.getItem("openSideBar");
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });

  // Update local storage whenever hidesidebar changes
  useEffect(() => {
    localStorage.setItem("openSideBar", JSON.stringify(openSideBar));
  }, [openSideBar]);

  return (
    <AppContext.Provider
      value={{
        menuItemsObject: { menuItems, setMenuItems },
        openSideBarObject: { openSideBar, setOpenSideBar },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
