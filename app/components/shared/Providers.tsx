"use client";

import { store } from "@/redux/app/store";
import { motion } from "framer-motion";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import UserLoading from "./UserLoading";
import AuthObserverLayout from "./AuthObserverLayout";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <motion.div>
            <Provider store={store}>
                <AuthObserverLayout>
                    <motion.div className="relative z-50">{children}</motion.div>
                </AuthObserverLayout>
                <ToastContainer
                    position="bottom-center"
                    theme={"dark"}
                    pauseOnHover={false}
                    hideProgressBar={true}
                    limit={1}
                    autoClose={3500}
                />
                {/* <UserLoading /> */}
            </Provider>
        </motion.div>
    )
}