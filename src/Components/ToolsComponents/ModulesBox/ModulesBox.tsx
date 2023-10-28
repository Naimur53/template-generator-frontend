import FileExplorer from "@/Components/FileExpoler/FileExpoler";
import PureTextInputTaker from "@/Components/Shared/PureTextInputTaker";
import useInput from "@/Hooks/useInput";
import { IFileStructure, IFileType } from "@/interface/common";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import backEndGen, {
  addNewModuleByName,
  removeModuleByName,
} from "@/redux/features/backEndGen/backEndGen";
import { removePage } from "@/redux/features/frontEndGen/frontEndGen";
import { faClose, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState, useMemo } from "react";
type Props = {
  moduleOnly?: boolean;
};

const ModulesBox: React.FC<Props> = ({ moduleOnly }) => {
  const backendGen = useAppSelector((state) => state.backendGen);

  const modules = useMemo(() => {
    return backendGen.map((single) => single.name);
  }, [backendGen]);
  const dispatch = useAppDispatch();

  const [shouldAdd, setShouldAdd] = useState(true);
  const language = "ts";

  const onlyModuleData: IFileStructure = {
    name: "modules",
    type: IFileType.Folder,
    children: [
      ...modules.map(
        (single): IFileStructure => ({
          name: single,
          type: IFileType.Folder,
          Input: (
            <p key={single} className="group ml-0">
              {single}
              <button
                onClick={() => dispatch(removeModuleByName(single))}
                className="opacity-0 invisible ml-2 group-hover:visible group-hover:opacity-100 "
              >
                <FontAwesomeIcon className="" icon={faClose} />
              </button>
            </p>
          ),
          children: [
            {
              name: `${single}.constant.ts`,
              type: IFileType.File,
              language,
            },
            {
              name: `${single}.controller.ts`,
              type: IFileType.File,
              language,
            },
            {
              name: `${single}.interface.ts`,
              type: IFileType.File,
              language,
            },
            {
              name: `${single}.model.ts`,
              type: IFileType.File,
              language,
            },
            {
              name: `${single}.route.ts`,
              type: IFileType.File,
              language,
            },
            {
              name: `${single}.validation.ts`,
              type: IFileType.File,
              language,
            },
          ],
        })
      ),
    ],
  };
  const fullData: IFileStructure = {
    name: "src",
    type: IFileType.Folder,
    children: [
      {
        name: "app",
        type: IFileType.Folder,
        children: [
          {
            name: "middlewares",
            type: IFileType.Folder,
            children: [
              {
                name: "auth.ts",
                type: IFileType.File,
                language,
              },
              {
                name: "globalErrorHandler.ts",
                type: IFileType.File,
                language,
              },
              {
                name: "handleZodError.ts",
                type: IFileType.File,
                language,
              },
              {
                name: "validateRequest.ts",
                type: IFileType.File,
                language,
              },
            ],
          },
          { ...onlyModuleData },
        ],
      },
      {
        name: "app.ts",
        type: IFileType.File,
        language,
      },
      {
        name: "server.ts",
        type: IFileType.File,
        language,
      },
    ],
  };
  const inputNewData = {
    name: "Enter Input",
    type: IFileType.Folder,
    Input: (
      <PureTextInputTaker
        action={addNewModuleByName}
        previousData={modules}
        shouldAdd={shouldAdd}
        onClose={() => {
          setShouldAdd(false);
        }}
      ></PureTextInputTaker>
    ),
  };
  const data = moduleOnly ? onlyModuleData : fullData;
  if (moduleOnly) {
    if (shouldAdd && data.children) {
      data.children = [
        ...data.children,
        {
          ...inputNewData,
        },
      ];
    }
  } else if (
    shouldAdd &&
    data?.children &&
    data.children[0]?.children &&
    data.children[0]?.children[1].children
  ) {
    data.children[0].children[1].children = [
      ...data.children[0]?.children[1].children,
      inputNewData,
    ];
  }
  return (
    <div className="commonBox">
      <div className="commonBox-title-wrap">
        <Image
          width={32}
          height={26}
          src="/icons/module-gear.jpg"
          alt="code"
        ></Image>
        <h4>Modules</h4>
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

export default ModulesBox;
