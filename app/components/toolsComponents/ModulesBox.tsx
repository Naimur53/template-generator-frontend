'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileExplorer from "../shared/FileExplorer";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import PureTextInputTaker from "../shared/PureTextInputTaker";
import { IFileStructure, IFileType } from "@/interface/common";
import { addNewModuleByName, removeModuleByName } from "@/redux/features/backEndGen/backEndGen";
import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";

export default function ModulesBox({ moduleOnly }: { moduleOnly: boolean }) {

    const backendGen = useAppSelector((state) => state.backendGen);

    const modules = useMemo(() => {
        return backendGen.map((single: any) => single.name);
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
            />
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
                />
                <h4>Modules</h4>
                <button
                    className="ml-auto opacity-100 hover:opacity-100 transition-all hover:text-blue-500 p-2"
                    onClick={() => setShouldAdd(true)}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <div>
                <FileExplorer data={data} />
            </div>
        </div>
    );
};
