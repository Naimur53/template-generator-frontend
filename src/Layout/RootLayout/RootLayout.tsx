import Background from "@/Components/ToolsComponents/Background/SingleBackground";
import useFirebaseAuthObserver from "@/Hooks/useFirebaseAuthObserver";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {
  children: ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  const observer = useFirebaseAuthObserver();
  return (
    <motion.div>
      <motion.div className="relative z-50">{children}</motion.div>
      <ToastContainer
        position="bottom-center"
        theme={"dark"}
        pauseOnHover={false}
        hideProgressBar={true}
        limit={1}
        autoClose={3500}
      />
    </motion.div>
  );
};

export default RootLayout;
