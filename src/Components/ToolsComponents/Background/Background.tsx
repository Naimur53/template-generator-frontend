import { useRouter } from "next/router";
import React from "react";
import { AnimatePresence, motion, AnimationProps } from "framer-motion";
import { TSingleBackground } from "@/interface/common";
import SingleBackground from "./SingleBackground";
import useScrollValues from "@/Hooks/useScrollValues";
type Props = {};
const initialLeft = { x: "-100%", y: "-100%", opacity: 0, rotate: 90 };
const animateLeft = { x: "-50%", y: "-50%", opacity: 1, rotate: 0 };

const initialPop = { scale: 1, opacity: 0, rotate: 0 };
const animatePop = { scale: 1, opacity: 1, rotate: 0 };

const initialRight = { x: "100%", y: "30%", rotate: 90, opacity: 0 };
const animateRight = { x: "30%", y: "30%", rotate: 0, opacity: 1 };
// const shouldAnimate = (url: string[]) =>
//   url.some((single) => single === router.route);

const datas: TSingleBackground[] = [
  // react
  {
    initial: initialLeft,
    animate: animateLeft,
    exit: initialLeft,
    imgUrl: "/images/large-react.png",
    className: "left-0 top-1/3",
    imgClassName: "w-[1500px]",
    activeUrls: [
      "/tools/reactTem",
      "/tools/reactReduxTemplateCreator",
      "/tools/reactReduxApiFeatureCreator",
    ],
  },
  // redux
  {
    initial: initialRight,
    animate: animateRight,
    exit: initialRight,
    imgUrl: "/icons/redux-icon.png",
    className: "bottom-0 right-0",
    imgClassName: "w-[700px]",
    activeUrls: [
      "/tools/reactReduxTemplateCreator",
      "/tools/reactReduxApiFeatureCreator",
      "/tools/nextApiFeatureCreator",
      "/tools/nextReduxTemplateCreator",
    ],
  },

  // next js
  {
    initial: initialPop,
    animate: animatePop,
    exit: initialLeft,
    imgUrl: "/images/next-text.png",
    className: " top-10",
    imgClassName: "w-[800px] filter invert",
    activeUrls: [
      "/tools/nextTem",
      "/tools/nextReduxTemplateCreator",
      "/tools/nextApiFeatureCreator",
    ],
  },
  // mongoose
  {
    initial: initialPop,
    animate: animatePop,
    exit: initialPop,
    imgUrl: "/icons/mongodb.png",
    className: "left-1/2 !-translate-x-1/2 top-10",
    imgClassName: "w-[900px] h-[600px] ",
    activeUrls: [
      "/tools/mongooseTemplateCreator",
      "/tools/mongooseModulesCreator",
    ],
  },
  // postgres
  {
    initial: { clipPath: "circle(0.5% at 100% 100%)" },
    animate: { clipPath: "circle(141.4% at 100% 100%)" },
    exit: initialLeft,
    imgUrl: "/images/postgres.png",
    className: "bottom-[100px] right-[100px] translate-x-1/2 translate-y-1/2",
    imgClassName: "w-[900px] h-[600px] ",
    activeUrls: [
      "/tools/postgresTemplateCreator",
      "/tools/postgresModulesCreator",
    ],
  },
  // prisma
  {
    initial: initialPop,
    animate: animatePop,
    exit: initialLeft,
    imgUrl: "/images/prisma.png",
    className: "-left-[200px] top-0 -translate-x-1/2",
    imgClassName: "w-[900px]",
    activeUrls: [
      "/tools/postgresModulesCreator",
      "/tools/postgresTemplateCreator",
    ],
  },
];
// const activeBgs = datas.filter((single) => {
//   return shouldAnimate(single.activeUrls);
// });
const Background = (props: Props) => {
  const { smoothedScrollY } = useScrollValues();
  const normalizeValue = (
    smoothedScrollY: number,
    minValue: number,
    maxValue: number
  ): number => {
    // Ensure that the value is within the specified range (minValue to maxValue)
    const clampedValue = Math.min(
      Math.max(smoothedScrollY, minValue),
      maxValue
    );

    // Calculate the normalized value between 0 and 1
    const normalizedValue = (clampedValue - minValue) / (maxValue - minValue);

    return 1 - normalizedValue;
  };

  const minValue = 0; // Replace with the minimum value for your range
  const maxValue = 1; // Replace with the maximum value for your range

  const normalizedValue = normalizeValue(
    smoothedScrollY / 1000,
    minValue,
    maxValue
  );
  console.log(smoothedScrollY / 1000);
  return (
    <>
      <motion.div
        className="fixed inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: normalizedValue }}
        transition={{ type: "just", stiffness: 10 }}
      >
        {datas.map((single, i) => (
          <SingleBackground {...single} key={i} i={i}></SingleBackground>
        ))}
      </motion.div>
    </>
  );
};

export default Background;
