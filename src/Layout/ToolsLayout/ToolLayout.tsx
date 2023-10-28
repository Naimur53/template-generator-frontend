import NavBar from "@/Components/Shared/NavBar";
import Sidebar from "@/Components/ToolsComponents/Sidebar/Sidebar";
import React, { ReactNode } from "react";
import PrivateLayout from "../PrivateLayout/PrivateLayout";
import Background from "@/Components/ToolsComponents/Background/Background";
type LayoutProps = {
  children: ReactNode;
};
const ToolLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PrivateLayout>
      <div className="relative z-50">
        <NavBar></NavBar>
        <div className="flex justify-between w-full">
          <Sidebar></Sidebar>
          <div className="w-full ml-[320px] p-2  ">
            <>{children}</>
          </div>
        </div>
      </div>
      <Background></Background>
    </PrivateLayout>
  );
};
export default ToolLayout;
