import NavBar from "@/Components/Shared/NavBar";
import Sidebar from "@/Components/ToolsComponents/Sidebar/Sidebar";
import React, { ReactNode } from "react";
import PrivateLayout from "../PrivateLayout/PrivateLayout";
type LayoutProps = {
  children: ReactNode;
};
const ToolLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PrivateLayout>
      <NavBar></NavBar>
      <div className="flex justify-between w-full">
        <Sidebar></Sidebar>
        <div className="w-full ml-[320px] p-2 bg-main-dark">
          <>{children}</>
        </div>
      </div>
    </PrivateLayout>
  );
};
export default ToolLayout;
