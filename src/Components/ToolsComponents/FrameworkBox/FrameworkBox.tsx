import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { addCssFrameWork } from "@/redux/features/frontEndGen/frontEndGen";
import Image from "next/image";
import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICssFrameworks } from "@/interface/common";

interface Props {}
const FrameworkBox: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const activeFrameWork = useAppSelector(
    (state) => state.frontEndGen.cssFrameWork
  );
  const frameWorks = [
    {
      name: ICssFrameworks.MaterialUi,
      icon: "/images/mui.png",
    },
    {
      name: ICssFrameworks.Tailwind,
      icon: "/images/tailwind.png",
    },
    {
      name: ICssFrameworks.Bootstrap,
      icon: "/images/bootstrap.png",
    },
    {
      name: ICssFrameworks.ChakraUi,
      icon: "/images/charka.png",
    },
    {
      name: ICssFrameworks.AntDesign,
      icon: "/images/ant.png",
    },
  ];
  return (
    <div className="commonBox">
      <div className="commonBox-title-wrap">
        <Image width={32} height={26} src="/icons/css.png" alt="css"></Image>
        <h4>Css Framework</h4>
        <button
          onClick={() => dispatch(addCssFrameWork(undefined))}
          className={`ml-auto transition-all p-2 hover:text-error-primary  ${
            activeFrameWork ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <div className=" flex justify-between flex-wrap items-center css-framework-wrap">
        {frameWorks.map((single) => (
          <button
            key={single.name}
            className={
              activeFrameWork
                ? activeFrameWork === single.name
                  ? "css-active"
                  : "css-disabled"
                : ""
            }
            onClick={() => dispatch(addCssFrameWork(single.name))}
          >
            <Image
              width={80}
              height={40}
              src={single.icon}
              alt={single.name}
            ></Image>
            <span className="pt-3 font-medium transition-all  inline-block text-center">
              {single.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FrameworkBox;
