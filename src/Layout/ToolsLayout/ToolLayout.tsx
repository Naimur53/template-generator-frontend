import NavBar from "@/Components/Shared/NavBar";
import Sidebar from "@/Components/ToolsComponents/Sidebar/Sidebar";
import React, { ReactNode } from "react";
type LayoutProps = {
  children: ReactNode;
};
const ToolLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex justify-between w-full">
        <Sidebar></Sidebar>
        <div className="w-full  bg-main-dark">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
export default ToolLayout;
