import FileExplorer from "@/Components/FileExpoler/FileExpoler";
import PureTextInputTaker from "@/Components/Shared/PureTextInputTaker";
import useInput from "@/Hooks/useInput";
import { IFileStructure, IFileType } from "@/interface/common";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import {
  addApis,
  addPage,
  removeApis,
  removePage,
} from "@/redux/features/frontEndGen/frontEndGen";
import { textChecker } from "@/utils/textChecker";
import { faClose, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
type Props = {};

const ReduxApiSliceCreatorBox: React.FC<Props> = () => {
  const apis = useAppSelector((state) => state.frontEndGen.apis);
  const technology = useAppSelector((state) => state.basicInfo.technology);
  const dispatch = useAppDispatch();

  const [shouldAdd, setShouldAdd] = useState(false);
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
          ...apis.map(
            (single): IFileStructure => ({
              name: single,
              type: IFileType.Folder,
              language: technology,
              Input: (
                <p key={single} className="group">
                  {single}
                  <button
                    onClick={() => dispatch(removeApis(single))}
                    className="opacity-0 invisible ml-2 group-hover:visible group-hover:opacity-100 "
                  >
                    <FontAwesomeIcon className="" icon={faClose} />
                  </button>
                </p>
              ),
              children: [
                {
                  name: `${single}Api.${technology}`,
                  type: IFileType.File,
                  language: technology,
                },
                {
                  name: `${single}Slice.${technology}`,
                  type: IFileType.File,
                  language: technology,
                },
                {
                  name: `${single}Book.${technology}`,
                  type: IFileType.File,
                  language: technology,
                },
              ],
            })
          ),
        ],
      },
    ],
  };
  if (shouldAdd && data?.children && data.children[1].children) {
    data.children[1].children = [
      ...data.children[1].children,
      {
        name: "Enter Input",
        type: IFileType.Folder,
        Input: (
          <PureTextInputTaker
            action={addApis}
            previousData={apis}
            shouldAdd={shouldAdd}
            onClose={() => {
              setShouldAdd(false);
            }}
          ></PureTextInputTaker>
        ),
      },
    ];
  }
  return (
    <div className="commonBox ">
      <div className="commonBox-title-wrap">
        <Image
          width={32}
          height={26}
          src="/icons/redux-icon.png"
          alt="code"
        ></Image>
        <h4>Redux</h4>
        <button
          className="ml-auto opacity-100 hover:opacity-100 transition-all hover:text-blue-500 p-2"
          onClick={() => setShouldAdd(true)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div>
        <FileExplorer data={data}></FileExplorer>
      </div>
    </div>
  );
};

export default ReduxApiSliceCreatorBox;
