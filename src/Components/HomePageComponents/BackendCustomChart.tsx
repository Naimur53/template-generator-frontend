import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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

  const [isMongoose, setIsMongoose] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMongoose((pre) => !pre);
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="backed-custom-chart-warp h-[650px] flex justify-center items-center ">
      <div
        className={`outer-rounded-box ${
          !isMongoose ? "border-green-600" : "border-cyan-600"
        }`}
      >
        <div
          className={`inner-round-box ${
            isMongoose ? "border-green-600" : "border-cyan-600"
          }`}
        >
          {isMongoose ? (
            <motion.div
              key={isMongoose ? "img1" : "img2"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Image
                quality={100}
                width={50}
                height={200}
                className="w-full"
                src="/images/transparent-mongodb.png"
                alt=""
              />
            </motion.div>
          ) : (
            <motion.div
              key={isMongoose ? "img1" : "img2"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Image
                quality={100}
                width={50}
                height={200}
                className="w-full"
                src="/images/postgres.png"
                alt=""
              />
            </motion.div>
          )}

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
