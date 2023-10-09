import { IFileStructure, IFileType } from "@/interface/common";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import addTotalChildCount from "@/utils/createFileStructureData";

interface IProps {
  data: IFileStructure;
}

const FileExplorer: React.FC<IProps> = ({ data }) => {
  const newData = addTotalChildCount(data);

  const renderTree = (item: IFileStructure, level = 0, index: number) => {
    let height = index === 0 && level === 0 ? 0 : 39;
    let width = index === 0 && level === 0 ? 0 : 40 * level;
    if (item.previousSiblingCount) {
      //   height = item.previousSiblingCount * 2;
      height = height * item.previousSiblingCount + 50;
    }

    return (
      <div
        className=" mt-2"
        key={item.name}
        style={{ paddingLeft: `${level * 40}px` }}
      >
        <div className=" relative">
          <div className="px-2 py-1 max-w-[140px]  ">
            {/* {item.name} */}
            <div className="flex items-center gap-2">
              {item.type === IFileType.Folder ? (
                <Image
                  width={25}
                  height={25}
                  src="/icons/file-icon.png"
                  alt="code"
                ></Image>
              ) : (
                <Image
                  width={15}
                  height={15}
                  src={
                    item.language === "js"
                      ? "/images/javascript-img.png"
                      : "/images/typescript-img.png"
                  }
                  alt="code"
                ></Image>
              )}
              {item.Input ? (
                <div className="absolute left-[40px]">{item.Input}</div>
              ) : (
                <span className="text-sm leading-0 mb-0 pb-0">{item.name}</span>
              )}
            </div>
          </div>
          <motion.div
            initial={{
              width,
              height,
              clipPath: "circle(10.0% at 0% 0%)", // Initial clipPath (rectangle)
            }}
            animate={{
              width,
              height,
              clipPath: "circle(141.4% at 0% 0%)", // Final clipPath (trapezoid)
            }}
            transition={{ duration: 1, ease: "linear" }}
            className={`absolute border-l-2 border-b-2 bottom-0   -translate-x-full rounded-bl-xl mb-2 pointer-events-none w-0 h-0  ${
              index === 0 && level === 0 ? "border-transparent" : "border-white"
            }`}
          ></motion.div>
        </div>
        {item.children?.map((child, i) => {
          //   const innerD = child?.children ? calDepth(child, 1) : 0;
          return renderTree(child, level + 1, i);
        })}
      </div>
    );
  };

  return <div>{renderTree(newData, 0, 0)}</div>;
};
export default FileExplorer;
