'use client'

import { dataCreator } from "@/helper/dataCreator/dataCreator";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function FrontEndExplain() {

    const techs = useMemo(() => dataCreator.allFrontendAnimationPossibleData, []);
    const [technologyIndex, setTechnologyIndex] = useState(0);

    useEffect(() => {
        const time = setInterval(() => {
            setTechnologyIndex((prevIndex) => (prevIndex + 1) % techs.length);
        }, 2000);
        return () => {
            clearInterval(time);
        };
    }, [techs.length]);

    return (
        <section className="container mx-auto grid grid-cols-1 pt-16 xl:grid-cols-2 gap-20">
            <div>
                <span className="font-robot text-lg text-cyan-500">
                    Front End Kickstarter
                </span>
                <h2 className="text-3xl lg:text-5xl font-semibold mt-4">
                    Generate Your Template with desire technology
                </h2>
                <p className="mt-10">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                    deserunt sunt libero. Mollitia non qui nemo id dolores laudantium,
                    sit in optio, quam dolorum, corrupti expedita ea voluptatem! Velit,
                    architecto.
                </p>
                <div className="grid grid-cols-3 mt-10">
                    <div className=" text-center py-4 border-r border-cyan-300">
                        <span className="text-4xl inline-block mb-3 font-bold text-cyan-400">
                            5
                        </span>
                        <p>Css Framework</p>
                    </div>
                    <div className=" text-center py-4 border-r border-cyan-300">
                        <span className="text-4xl inline-block mb-3 font-bold text-cyan-400">
                            13
                        </span>
                        <p>React hooks</p>
                    </div>
                    <div className=" text-center py-4  ">
                        <span className="text-4xl inline-block mb-3 font-bold text-cyan-400">
                            5
                        </span>
                        <p>Firebase Auth</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex justify-center items-center flex-wrap gap-3">
                    <AnimatePresence mode="popLayout">
                        {techs[technologyIndex]?.map((tech, index) => (

                            <motion.div
                                key={tech.name}
                                className="w-[100px] flex justify-center items-center relative  p-4 border-cyan-400 text-center h-[100px] border rounded-2xl "
                                initial={{ opacity: 0, x: -50, scale: 1 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                            // style={{
                            //   clipPath:
                            //     "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
                            // }}
                            >
                                <Image
                                    src={tech.icon}
                                    width={80}
                                    height={80}
                                    alt={tech.name}
                                    className="w-auto p-2 max-h-[100px] rounded-xl z-20"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
