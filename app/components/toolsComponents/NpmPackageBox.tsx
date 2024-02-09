'use client'

import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { removePackage } from "@/redux/features/frontEndGen/frontEndGen";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import NpmPackageBoxPopupContent from "./NpmPackageBoxPopupContent";

export default function NpmPackageBox() {

    const [open, setOpen] = useState(false);
    const npmPackages = useAppSelector((state) => state.frontEndGen.npmPackages);
    const dispatch = useAppDispatch();

    return (
        <div>
            <div className="commonBox">
                <div className="commonBox-title-wrap">
                    <Image
                        width={60}
                        height={26}
                        src="/icons/npm-icon.png"
                        alt="code"
                        quality={100}
                        className="w-[30px]"
                    />
                    <h4>Npm Packages</h4>
                    <button
                        className="ml-auto opacity-100 hover:opacity-100 transition-all hover:text-blue-500 p-2"
                        onClick={() => setOpen(true)}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                {npmPackages.length ? (
                    <div className="h-[150px] overflow-y-scroll">
                        <div className="flex gap-3 flex-wrap ">
                            {npmPackages.map((single: any) => (
                                <div
                                    key={single.name}
                                    className="flex items-center rounded-xl  py-1 px-3 gap-3  bg-blue-400  "
                                >
                                    <p>{single.name}</p>
                                    <button
                                        className="mt-1"
                                        onClick={() => dispatch(removePackage(single))}
                                    >
                                        <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-full">
                        <p>No packages selected</p>
                    </div>
                )}
            </div>
            <Popup
                open={open}
                className="p-0"
                contentStyle={{ padding: "0px", border: "0px" }}
                onClose={() => setOpen(false)}
            >
                <div className="absolute -top-[15px] -right-[15px] ">
                    <button
                        className="w-[30px] h-[30px] rounded-full bg-cyan-600 flex justify-center items-center"
                        onClick={() => setOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            height="1em"
                            viewBox="0 0 384 512"
                        >
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                    </button>
                </div>
                <div className="bg-main-dark p-5 rounded-lg">
                    <NpmPackageBoxPopupContent />
                </div>
            </Popup>
        </div>
    );
};
