import NavBar from "@/Components/Shared/NavBar";
import Sidebar from "@/Components/ToolsComponents/Sidebar/Sidebar";
import React, { ReactNode } from "react";
import PrivateLayout from "../PrivateLayout/PrivateLayout";
import Background from "@/Components/ToolsComponents/Background/SingleBackground";
import { motion } from "framer-motion";
type LayoutProps = {
  children: ReactNode;
};
const ToolLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PrivateLayout>
      <div className="relative z-50">
        <NavBar></NavBar>
        <div className="flex justify-between w-full overflow-hidden">
          <Sidebar></Sidebar>
          <motion.div
            initial={{ x: 10 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="w-full ml-[320px] p-2 pt-20 "
          >
            <>{children}</>
          </motion.div>
        </div>
      </div>
    </PrivateLayout>
  );
};
export default ToolLayout;
