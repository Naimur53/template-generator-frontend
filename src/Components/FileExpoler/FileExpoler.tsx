import { IFileStructure, IFileType } from "@/interface/common";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface IProps {
  data: IFileStructure;
}
function calculateChildCount(node: IFileStructure) {
  if (!node.children) {
    return 0;
  }

  let childCount = node.children.length;

  for (const child of node.children) {
    childCount += calculateChildCount(child);
  }

  return childCount;
}

function addTotalChildCount(data: IFileStructure) {
  const newData = { ...data };
  newData.totalChildCount = calculateChildCount(newData);

  if (newData.children) {
    let previousSiblingCount = 0;

    newData.children = newData.children.map((child) => {
      // Add the total child count of previous siblings to each sibling
      child.previousSiblingCount = previousSiblingCount;
      previousSiblingCount += calculateChildCount(child);

      return addTotalChildCount(child);
    });
  }

  return newData;
}

const FileExplorer: React.FC<IProps> = ({ data }) => {
  const newData = addTotalChildCount(data);

  const renderTree = (item: IFileStructure, level = 0, index: number) => {
    let height = index === 0 && level === 0 ? 0 : 45;
    let width = index === 0 && level === 0 ? 0 : 20 * level;
    if (item.previousSiblingCount) {
      //   height = item.previousSiblingCount * 2;
      height = height * item.previousSiblingCount + 50;
    }
    return (
      <div
        className=" mt-2"
        key={item.name}
        style={{ paddingLeft: `${level * 20}px` }}
      >
        <div className=" relative">
          <div className="px-2 py-1 max-w-[140px]  ">
            {/* {item.name} */}
            <div className="flex items-center gap-2">
              {item.type === IFileType.Folder ? (
                <Image
                  width={26}
                  height={26}
                  src="/icons/file-icon.png"
                  alt="code"
                ></Image>
              ) : (
                <Image
                  width={20}
                  height={20}
                  src={
                    item.language === "js"
                      ? "/images/javascript-img.png"
                      : "/images/typescript-img.png"
                  }
                  alt="code"
                ></Image>
              )}
              <span className="text-lg leading-0 mb-0 pb-0">{item.name}</span>
            </div>
          </div>
          <motion.div
            initial={{ width: 0, height: 0 }}
            animate={{
              width: [0, 0, 0, 0, 0, 0, width],
              height: [0, 0, height],
            }}
            className="absolute border-l-2 border-b-2 bottom-0   -translate-x-full rounded-bl-xl mb-2 pointer-events-none w-0 h-0 transition-all duration-1000"
          ></motion.div>
        </div>
        {item.children?.map((child, i) => {
          //   const innerD = child?.children ? calDepth(child, 1) : 0;
          return renderTree(child, level + 1, i);
        })}
      </div>
    );
  };

  return (
    <div>
      <h1>File Explorer</h1>
      {renderTree(newData, 0, 0)}
    </div>
  );
};
export default FileExplorer;
