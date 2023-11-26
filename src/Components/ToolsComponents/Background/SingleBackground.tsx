import { TSingleBackground } from "@/interface/common";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
type props = { i: any } & TSingleBackground;
function SingleBackground({
  animate,
  imgUrl,
  initial,
  className,
  exit,
  imgClassName,
  activeUrls,
  i,
}: props): React.ReactNode {
  const router = useRouter();
  const isPreActive = useRef(false);
  const shouldAnimate = (url: string[]) =>
    url.some((single) => single === router.pathname);
  const transition = { duration: 1, ease: "linear" };
  useEffect(() => {
    isPreActive.current = shouldAnimate(activeUrls);
    return () => {};
  });
  return (
    <motion.div
      initial={isPreActive.current ? (animate as any) : initial}
      animate={shouldAnimate(activeUrls) ? animate : initial}
      // exit={exit}
      transition={transition}
      className={`absolute selection-none pointer-events-none gen-bg  blur-sm ${className}`}
    >
      <Image
        width={500}
        height={500}
        src={imgUrl}
        className={`w-[1000px] opacity-40 ${imgClassName}`}
        alt="react icon"
      />
    </motion.div>
  );
}
export default SingleBackground;
