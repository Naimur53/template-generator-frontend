import Image from "next/image";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <div className=" pb-[65px]">
      <div className="fixed top-0 left-0 right-0 bg-primary py-2 pr-3 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image width={55} height={200} src="/logo.png" alt="logo" />
          <h2 className="text-3xl font-medium font-robot text-white">TemGen</h2>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="w-[25px] bg-white h-[3px]"></div>
          <div className="w-[15px] bg-white h-[3px]"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
