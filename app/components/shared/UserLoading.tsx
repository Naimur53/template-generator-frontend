'use client'

import { useAppSelector } from "@/redux/app/store";
import { AnimatePresence, motion } from "framer-motion";

export default function UserLoading() {
    const loading = useAppSelector((state) => state.user.loading);
    const init = { opacity: 0 };
    const animate = { opacity: 1 };
    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={init}
                    animate={animate}
                    exit={init}
                    transition={{ duration: 0.3, ease: "linear" }}
                    className="fixed inset-0 flex justify-center items-center z-[9999999] backdrop-blur-sm"
                >
                    <div className="backdrop">
                        <div className="loader">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
