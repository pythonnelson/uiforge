"use client";

import { allProjectsData, Project } from "@/constants/data";
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
  showSearchBarObject: {
    showSearchBar: boolean;
    setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  };
  isMobileViewObject: {
    isMobileView: boolean;
    setIsMobileView: React.Dispatch<React.SetStateAction<boolean>>;
  };
  showSideBarObject: {
    showSideBar: boolean;
    setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  };
  allProjectsDataObject: {
    allProjects: Project[];
    setAllProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  };
  isLoadingObject: {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
  showSearchBarObject: {
    showSearchBar: false,
    setShowSearchBar: () => {},
  },
  isMobileViewObject: {
    isMobileView: false,
    setIsMobileView: () => {},
  },
  showSideBarObject: {
    showSideBar: false,
    setShowSideBar: () => {},
  },
  allProjectsDataObject: {
    allProjects: [],
    setAllProjects: () => {},
  },
  isLoadingObject: {
    isLoading: true,
    setIsLoading: () => {},
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
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("openSideBar");
      return storedValue !== null ? JSON.parse(storedValue) : true;
    } else {
      return true;
    }
  });

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Resize window
  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 640);
    }

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Simulate the fetch using setTimeOut
  useEffect(() => {
    function fetchAllProjects() {
      setTimeout(() => {
        setAllProjects(allProjectsData);
        setIsLoading(false);
      }, 3000);
    }
    fetchAllProjects();
  });

  // Update local storage whenever hidesidebar changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("openSideBar", JSON.stringify(openSideBar));
    }
  }, [openSideBar]);

  return (
    <AppContext.Provider
      value={{
        menuItemsObject: { menuItems, setMenuItems },
        openSideBarObject: { openSideBar, setOpenSideBar },
        showSearchBarObject: { showSearchBar, setShowSearchBar },
        isMobileViewObject: { isMobileView, setIsMobileView },
        showSideBarObject: { showSideBar, setShowSideBar },
        allProjectsDataObject: { allProjects, setAllProjects },
        isLoadingObject: { isLoading, setIsLoading },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
