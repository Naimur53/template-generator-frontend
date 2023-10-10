import CustomLink from "@/Components/Shared/CustomLink";
import { ISingleNavItem } from "@/interface";
import Image from "next/image";
import React from "react";
import SingleNavItems from "./SingleNavItems";
import { navItemsBackend, navItemsFrontEnd } from "@/utils/sideBarInfo";
type Props = {};

const Sidebar = ({}: Props) => {
  return (
    <div className="h-[calc(100vh-65px)] fixed left-0 bottom-0 w-[320px] bg-primary">
      <div className="p-[30px]">
        <h2 className="sidebar-heading">Front End Generator</h2>
        <div className="sidebar-container">
          {navItemsFrontEnd.map((single) => (
            <SingleNavItems key={single.title} {...single}></SingleNavItems>
          ))}
          <h2 className="sidebar-heading mt-[30px]">Backend Generator</h2>
          {navItemsBackend.map((single) => (
            <SingleNavItems key={single.title} {...single}></SingleNavItems>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
