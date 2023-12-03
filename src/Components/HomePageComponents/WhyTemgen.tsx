import { faBolt, faCode, faCodeMerge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

type Props = {};
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const WhyTemgen = (props: Props) => {
  const data = [
    {
      icon: faBolt,
      title: "Quick Start",
      description:
        "lorem df ad asdf asdlkfjsdakfa klsd kfa sdfkjsd akfjsd aklf jsdfsda ",
    },
    {
      icon: faCodeMerge,
      title: "Latest Npm Version",
      description:
        "lorem df ad asdf asdlkfjsdakfa klsd kfa sdfkjsd akfjsd aklf jsdfsda ",
    },
    {
      icon: faCode,
      title: "Multi Language Support",
      description:
        "lorem df ad asdf asdlkfjsdakfa klsd kfa sdfkjsd akfjsd aklf jsdfsda ",
    },
  ];
  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <h2 className="home-heading">Why you need Temgen</h2>
          <p className="w-1/2 text-center mt-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            et iste tempora quis eum obcaecati mollitia excepturi nam{" "}
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 lg:grid-cols-3 pt-20 gap-5 "
        >
          {data.map((single) => (
            <motion.div
              variants={item}
              key={single.title}
              className="flex justify-center items-center flex-col  p-5 py-10 rounded-2xl"
            >
              {/* <img src={single.icon} alt="" /> */}
              <div className="w-[130px] h-[130px] bg-lightCyan flex justify-center items-center rounded-full">
                <FontAwesomeIcon
                  className=" text-cyan-500 text-6xl"
                  icon={single.icon}
                ></FontAwesomeIcon>
              </div>
              <div className="text-center">
                <h6 className="text-lg font-bold block pb-3 pt-4">
                  {single.title}
                </h6>
                <p className="text-secondary">{single.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTemgen;
