import React from "react";
import { motion } from "framer-motion";
type Props = {};

const BackendCustomChart = (props: Props) => {
  const data = [
    {
      title: "get",
    },
    {
      title: "add",
    },
    {
      title: "del",
    },
    {
      title: "up",
    },
    {
      title: "zod",
    },
    {
      title: "jwt",
    },
  ];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div className="backed-custom-chart-warp h-[650px] flex justify-center items-center ">
      <div className="outer-rounded-box">
        <div className="inner-round-box">
          <img className="w-[200px]" src="/icons/mongodb.png" alt="" />
          {/* <img className="w-[200px]" src="/icons/prisma.png" alt="" /> */}
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="absolute inset-0 "
        >
          {data.map((single, i) => (
            <motion.div
              variants={item}
              style={{ "--i": i + 1 } as React.CSSProperties}
              className="outer-single-item"
              key={i}
            >
              <div
                style={{ "--i": i + 1 } as React.CSSProperties}
                className="outer-content-wrap "
              >
                <span className="capitalize font-bold text-sm text-cyan-500">
                  {single.title}
                </span>
                <div
                  className={`outer-content-text-details-wrap text-sm details-wrap-${
                    i + 1
                  }`}
                >
                  <h2>Get Method</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BackendCustomChart;
