import React, { useState } from "react";
import { faPlus, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import commonReactNextPackages from "@/utils/npmPackages";
import NpmPackageBoxPopupContent from "./NpmPackageBoxPopupContent";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { removePackage } from "@/redux/features/frontEndGen/frontEndGen";
type Props = {};

const NpmPackageBox: React.FC<Props> = (props) => {
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
          ></Image>
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
              {npmPackages.map((single) => (
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
        <div className="bg-main-dark p-5">
          <NpmPackageBoxPopupContent></NpmPackageBoxPopupContent>
        </div>
      </Popup>
    </div>
  );
};
export default NpmPackageBox;
