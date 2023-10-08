import { IFileStructure } from "@/interface/common";
import React from "react";

interface IProps {
  data: IFileStructure;
}
const data = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "folder1",
      type: "folder",
      children: [
        { name: "file1.js", type: "file" },
        { name: "file2.js", type: "file" },
      ],
    },
    {
      name: "folder2",
      type: "folder",
      children: [
        { name: "file3.js", type: "file" },
        { name: "file4.js", type: "file" },
      ],
    },
  ],
};

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
      height = height * item.previousSiblingCount + 25;
    }
    return (
      <div
        className=" mt-2"
        key={item.name}
        style={{ paddingLeft: `${level * 20}px` }}
      >
        <div className="bg-green-900 relative">
          <h2 className="px-2 py-1">
            {/* {item.name} */}
            <span className="text-white">
              level_{level}___child_{item.totalChildCount}__in__{index}__pre_
              {item.previousSiblingCount}
            </span>
          </h2>
          <div
            style={{
              width: `${width}px`,
              height: `${height}px`,
            }}
            className="absolute border-l-2 border-b-2 bottom-0   -translate-x-full rounded-bl-xl mb-2 pointer-events-none w-0 h-0 transition-all duration-1000"
          ></div>
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
