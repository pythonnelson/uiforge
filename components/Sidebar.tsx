"use client";

import { MenuItem, useAppContext } from "@/context/ContextApi";
import Arrow from "./Arrow";
import Logo from "./Logo";
import LogoutButton from "./LogoutButton";
import { useEffect, useRef } from "react";

const Sidebar = () => {
  const {
    menuItemsObject: { menuItems, setMenuItems },
    openSideBarObject: { openSideBar, setOpenSideBar },
    isMobileViewObject: { isMobileView },
    showSideBarObject: { showSideBar, setShowSideBar },
  } = useAppContext();

  const menuRef = useRef<HTMLDivElement>(null);

  function handleLinkClink(item: MenuItem) {
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((prevMenuItem) =>
        prevMenuItem.id === item.id
          ? { ...prevMenuItem, isSelected: true }
          : { ...prevMenuItem, isSelected: false }
      )
    );
  }

  useEffect(() => {
    function handleClickOutSide(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isMobileView
      ) {
        setShowSideBar(false);
      }
    }
    if (showSideBar) {
      document.addEventListener("mousedown", handleClickOutSide);
    } else {
      document.removeEventListener("mousedown", handleClickOutSide);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [showSideBar, setShowSideBar, isMobileView]);

  useEffect(() => {
    if (isMobileView) {
      setOpenSideBar(true);
      setShowSideBar(false);
    } else {
      setShowSideBar(true);
    }
  }, [isMobileView]);

  return (
    <div
      ref={menuRef}
      style={{ position: isMobileView ? "fixed" : "relative" }}
      className={`${
        openSideBar ? "w-[300px] p-6" : "w-[100px] p-4"
      } h-screen pt-12 z-50 transition-all duration-300 bg-white ${
        showSideBar ? "block" : "hidden"
      } dark:bg-slate-950`}
    >
      <Arrow />
      <Logo />

      <div
        className={`mt-20 ${
          openSideBar ? "ml-0" : "ml-3"
        } flex-grow flex flex-col gap-2 space-y-5 text-[15px]`}
      >
        {menuItems.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleLinkClink(item)}
              className={`${
                item.isSelected
                  ? "text-white bg-[#1b6a88]"
                  : "hover:text-[#1b6a88] text-slate-800"
              } p-[7px] select-none cursor-pointer rounded-lg flex gap-2 w-[65%] items-center`}
            >
              {item.icon}
              {openSideBar && (
                <span className="dark:text-slate-100">{item.name}</span>
              )}
            </div>
          );
        })}
      </div>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
