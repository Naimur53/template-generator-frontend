import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Background = (props: Props) => {
  const { pathname } = useRouter();
  const initial = { x: "-100%", y: "-100%", opacity: 0 };
  const animate = (url: string, obj: Record<string, any>) =>
    url.includes(pathname) ? obj : initial;
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div
        initial={initial}
        animate={animate("/tools/reactTem", {
          x: "-50%",
          y: "-50%",
          opacity: 100,
        })}
        className="absolute left-0 blur-sm top-0 "
        transition={{ duration: 1, ease: "linear" }}
      >
        <img
          src="/images/large-react.png"
          className="w-[2000px]"
          alt="react icon"
        />
      </motion.div>
      <div className="absolute right-0 bottom-0 translate-y-1/3 blur-sm   translate-x-1/3  ">
        <img
          src="/icons/redux-icon.png"
          className="w-[1000px]"
          alt="react icon"
        />
      </div>
    </div>
  );
};

export default Background;
