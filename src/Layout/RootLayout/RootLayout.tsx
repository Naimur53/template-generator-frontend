import useFirebaseAuthObserver from "@/Hooks/useFirebaseAuthObserver";
import React, { ReactNode } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {
  children: ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  const observer = useFirebaseAuthObserver();
  return (
    <div>
      {children}
      <ToastContainer
        position="bottom-center"
        theme={"dark"}
        pauseOnHover={false}
        hideProgressBar={true}
        limit={2}
        autoClose={2000}
      />
    </div>
  );
};

export default RootLayout;
