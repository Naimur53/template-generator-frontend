import { ITechnology } from "@/interface";
import { IFileStructure, IFileType } from "@/interface/common";
import React from "react";

const getReduxFileData = (
  technology: ITechnology,
  newData: IFileStructure[]
) => {
  const data: IFileStructure = {
    name: "Redux",
    type: IFileType.Folder,
    children: [
      {
        name: "app",
        type: IFileType.Folder,
        children: [
          {
            name: `store.${technology}`,
            type: IFileType.File,
            language: technology,
          },
        ],
      },
      {
        name: "features",
        type: IFileType.Folder,
        children: [
          {
            name: "apiSlice",
            type: IFileType.Folder,
            children: [
              {
                name: `apiSlice.${technology}`,
                type: IFileType.File,
                language: technology,
              },
            ],
          },
          ...newData,
        ],
      },
    ],
  };
  return data;
};

const getChildrenOfFeatures = (name: string, technology: ITechnology) => [
  {
    name: `${name}Api.${technology}`,
    type: IFileType.File,
    language: technology,
  },
  {
    name: `${name}Slice.${technology}`,
    type: IFileType.File,
    language: technology,
  },
  {
    name: `${name}Selector.${technology}`,
    type: IFileType.File,
    language: technology,
  },
];
export const reduxFileData = {
  getReduxFileData,
  getChildrenOfFeatures,
};
