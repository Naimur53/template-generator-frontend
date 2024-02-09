'use client'

import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { addAuth, removeAuth } from "@/redux/features/frontEndGen/frontEndGen";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import AuthBoxModel from "./AuthBoxModel";

export default function AuthBox() {

    const [open, setOpen] = useState(false);
    const selectedAuth = useAppSelector((state) => state.frontEndGen.auths);
    const dispatch = useAppDispatch();
    const allAuth = ["email/password", "google", "facebook", "github", "twitter"];
    const isSelected = (name: string): boolean => {
        return Boolean(selectedAuth.find((single: any) => single === name));
    };

    const handleCheckbox = (name: string) => {
        if (isSelected(name)) {
            dispatch(removeAuth(name));
        } else {
            dispatch(addAuth(name));
        }
    };
    const handleModalOpen = () => {
        if (!selectedAuth.length) {
            toast.error("please select one authentication method below");
            return;
        }
        setOpen(true);
    };
    return (
        <div>
            <div className="commonBox">
                <div
                    className={`commonBox-title-wrap transition-all ${selectedAuth.length
                        ? "grayscale-0 opacity-100"
                        : "grayscale opacity-40"
                        }`}
                >
                    <Image
                        width={20}
                        height={26}
                        src="/icons/firebase-icon.png"
                        alt="code"
                    ></Image>
                    <h4>Firebase Auth</h4>
                    <button onClick={handleModalOpen} className="ml-auto p-1">
                        <FontAwesomeIcon icon={faGears}></FontAwesomeIcon>{" "}
                    </button>
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
                            <AuthBoxModel onClose={setOpen} />
                        </div>
                    </Popup>
                </div>

                <div className="">
                    {allAuth.map((single, i) => (
                        <div key={single}>
                            <label
                                htmlFor={single}
                                className="flex items-center gap-2 font-semibold pb-2 hover:opacity-70 opacity-100 transition-all "
                            >
                                <input
                                    type="checkbox"
                                    id={single}
                                    className="cursor-pointer w-[15px] h-[15px]"
                                    checked={isSelected(single)}
                                    onChange={() => handleCheckbox(single)}
                                />
                                <span className="cursor-pointer capitalize select-none">
                                    {single}
                                </span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
