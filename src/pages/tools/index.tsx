import FileExplorer from "@/Components/FileExpoler/FileExpoler";
import ToolLayout from "@/Layout/ToolsLayout/ToolLayout";
import { IFileStructure } from "@/interface/common";
import * as React from "react";

interface IToolsProps {}

const Tools: React.FunctionComponent<IToolsProps> = (props) => {
  const data: IFileStructure = {
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
          {
            name: "folder2",
            type: "folder",
            children: [
              { name: "file3.js", type: "file" },
              {
                name: "file4.js",
                type: "file",
                children: [
                  { name: "file3.js", type: "file" },
                  { name: "file4.js", type: "file" },
                  { name: "file4.js", type: "file" },
                  {
                    name: "file4.js",
                    type: "file",
                    children: [
                      { name: "file3.js", type: "file" },
                      { name: "file4.js", type: "file" },
                      {
                        name: "file4.js",
                        type: "file",
                        children: [
                          { name: "file3.js", type: "file" },
                          { name: "file4.js", type: "file" },
                          { name: "file4.js", type: "file" },
                          { name: "file4.js", type: "file" },
                        ],
                      },
                      {
                        name: "file4.js",
                        type: "file",
                        children: [
                          { name: "file3.js", type: "file" },
                          { name: "file4.js", type: "file" },
                          { name: "file4.js", type: "file" },
                          { name: "file4.js", type: "file" },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "folder1",
        type: "folder",
        children: [
          { name: "file1.js", type: "file" },
          { name: "file2.js", type: "file" },
        ],
      },
    ],
  };

  return (
    <ToolLayout>
      <div className=" h-screen pb-100 w-full">
        <FileExplorer data={data} />
      </div>
    </ToolLayout>
  );
};
export default Tools;
