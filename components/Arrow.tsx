import { useAppContext } from "@/context/ContextApi";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Arrow = () => {
  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
  } = useAppContext();

  function handleClik() {
    setOpenSideBar(!openSideBar); // toggle sidebar state  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change  // handle sidebar state change
  }
  return (
    <div
      onClick={handleClik}
      className="w-7 h-7 z-40 rounded-full absolute right-[-11px] top-[95px] flex items-center justify-center"
    >
      <div className="bg-[#1b6a88] rounded-full w-[70%] h-[70%] flex items-center justify-center cursor-pointer">
        {openSideBar ? (
          <IoIosArrowBack
            fontSize={"small"}
            className="text-white text-[12px]"
          />
        ) : (
          <IoIosArrowForward
            fontSize={"small"}
            className="text-white text-[12px]"
          />
        )}
      </div>
    </div>
  );
};

export default Arrow;
