import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import {
  addAuth,
  addHook,
  removeAuth,
  removeHook,
} from "@/redux/features/frontEndGen/frontEndGen";
import Image from "next/image";
import React, { useState } from "react";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomLink from "@/Components/Shared/CustomLink";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import AuthBoxModal from "./AuthBoxModal";
type Props = {};

const AuthBox = (props: Props) => {
  const [open, setOpen] = useState(false);
  const selectedAuth = useAppSelector((state) => state.frontEndGen.auths);
  const dispatch = useAppDispatch();
  const allAuth = ["email/password", "google", "facebook", "github", "twitter"];
  const isSelected = (name: string): boolean => {
    return Boolean(selectedAuth.find((single) => single === name));
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
          className={`commonBox-title-wrap transition-all ${
            selectedAuth.length
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
            <div className="bg-main-dark p-5">
              <AuthBoxModal></AuthBoxModal>
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

export default AuthBox;
