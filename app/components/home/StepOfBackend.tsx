'use client'

import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function StepOfBackend() {
    return (
        <div className="section-padding px-2 lg:px-0">
            <div className="service-area">
                <div className="hidden lg:block wave-step"></div>
                <motion.div
                    initial={{
                        left: "0%",
                    }}
                    whileInView={{
                        left: "100%",
                    }}
                    transition={{ duration: 2 }}
                    className="graydiv left-0 top-0  bg-main-dark absolute inset-0"
                ></motion.div>
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-[30px]">
                    <div className=" p-4  col-span-1 lg:col-span-4">
                        <div>
                            <span className="font-robot text-lg text-cyan-500">
                                Only Three Step To Follow
                            </span>
                            <h2 className="home-heading mt-4">
                                Generate Your Template with desire technology
                            </h2>
                            <p className="mt-10">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                                deserunt sunt libero. Mollitia non qui nemo id dolores
                                laudantium, sit in optio, quam dolorum, corrupti expedita ea
                                voluptatem! Velit, architecto.
                            </p>
                            <Link href="/services" style={{ textDecoration: "none" }}>
                                <button>Our services</button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex justify-center lg:justify-start">
                            <div className="position-1 ">
                                <div className="step-around "></div>
                                <div className="w-full flex justify-center z-30">
                                    <FontAwesomeIcon
                                        icon={faPenToSquare}
                                        color="black"
                                        className="img-rotate text-4xl "
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="step-section step-1">
                            <div>
                                <h4>Enter collection name</h4>
                            </div>

                            <p>
                                Chose your needed service and then go to details page on left
                                side you will find category by choosing your category a modal
                                will open
                            </p>
                            <div className="front"></div>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex justify-center lg:justify-start">
                            <div className="position-2">
                                <div className="step-around"></div>
                                <div className="w-full flex justify-center z-30">
                                    <Image
                                        width={46}
                                        height={46}
                                        quality={100}
                                        className="w-[46px]"
                                        alt="schema"
                                        src={"/icons/schema-black.png"}
                                    ></Image>
                                </div>
                            </div>
                        </div>
                        <div className="step-section step-2">
                            <div>
                                <h4>Create data schema</h4>
                            </div>
                            <p>
                                Chose you a provider who will be provide your service you can
                                save this order for later or you can complete your order by
                                clicking next then give our info and card to confirm order.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex justify-center lg:justify-start">
                            <div className="position-3">
                                <div className="step-around"></div>
                                <div className="w-full flex justify-center z-30">
                                    <Image
                                        width={46}
                                        height={46}
                                        quality={100}
                                        className="w-[46px]"
                                        alt="schema"
                                        src={"/icons/query-icon-transparent.png"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="step-section step-3">
                            <div>
                                <h4>Enable advance query</h4>
                            </div>
                            <p>
                                After a order complete you can chat with your provider. On my
                                Orders chat page you can find all of your order then you will
                                find a chat icons beside provider info by clicking that icons
                                you can chat with provider
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
