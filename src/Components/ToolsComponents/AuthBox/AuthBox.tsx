import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import {
  addAuth,
  addHook,
  removeAuth,
  removeHook,
} from "@/redux/features/frontEndGen/frontEndGen";
import Image from "next/image";
import React from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomLink from "@/Components/Shared/CustomLink";
type Props = {};

const AuthBox = (props: Props) => {
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
  return (
    <div>
      <div className="commonBox">
        <div className="commonBox-title-wrap">
          <Image
            width={20}
            height={26}
            src="/icons/firebase-icon.png"
            alt="code"
          ></Image>
          <h4>Firebase Auth</h4>
        </div>
        <div className="">
          {allAuth.map((single, i) => (
            <div key={single}>
              <div className="flex items-center gap-2 font-semibold pb-2 hover:opacity-70 opacity-100 transition-all ">
                <input
                  type="checkbox"
                  id={single}
                  className="cursor-pointer w-[15px] h-[15px]"
                  checked={isSelected(single)}
                  onChange={() => handleCheckbox(single)}
                />
                <label className="cursor-pointer capitalize" htmlFor={single}>
                  {single}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthBox;
