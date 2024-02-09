'use client'

import { motion } from "framer-motion";
import Navbar from "../components/shared/Navbar";
import PrivetLayout from "../components/shared/PrivetLayout";
import Sidebar from "../components/toolsComponents/Sidebar";

export default function ToolsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <PrivetLayout>
            <div className="relative z-50">
                <Navbar />
                <div className="flex justify-between w-full overflow-hidden">
                    <Sidebar />
                    <motion.div
                        initial={{ x: 10 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.4, ease: "linear" }}
                        className="w-full ml-[320px] p-2 pt-20 "
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </PrivetLayout>
    );
};
