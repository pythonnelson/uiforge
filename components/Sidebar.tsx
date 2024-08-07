"use client";

import { MenuItem, useAppContext } from "@/context/ContextApi";
import Arrow from "./Arrow";
import Logo from "./Logo";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  const {
    menuItemsObject: { menuItems, setMenuItems },
    openSideBarObject: { openSideBar },
  } = useAppContext();

  function handleLinkClink(item: MenuItem) {
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((prevMenuItem) =>
        prevMenuItem.id === item.id
          ? { ...prevMenuItem, isSelected: true }
          : { ...prevMenuItem, isSelected: false }
      )
    );
  }
  return (
    <div
      className={`${
        openSideBar ? "w-[320px] p-6" : "w-[100px]"
      } h-screen pt-12 relative transition-all duration-300 bg-slate-100 dark:bg-slate-900`}
    >
      <Arrow />
      <Logo />

      <div
        className={`mt-20 ${
          openSideBar ? "ml-0" : "ml-3 items-center justify-center"
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
