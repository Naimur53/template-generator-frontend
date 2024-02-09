'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileExplorer from "../home/FileExplorer";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import PureTextInputTaker from "../shared/PureTextInputTaker";
import { IFileStructure, IFileType } from "@/interface/common";
import { addPage, removePage } from "@/redux/features/frontEndGen/frontEndGen";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";

export default function PagesBox() {
    const pages = useAppSelector((state) => state.frontEndGen.pages);
    const technology = useAppSelector((state) => state.basicInfo.technology);
    const dispatch = useAppDispatch();

    const [shouldAdd, setShouldAdd] = useState(false);
    const data: IFileStructure = {
        name: "Pages",
        type: IFileType.Folder,
        children: [
            ...pages.map(
                (single: any): IFileStructure => ({
                    name: single,
                    type: IFileType.File,
                    language: technology,
                    Input: (
                        <p key={single} className="group ml-0">
                            {single}.{technology}
                            <button
                                onClick={() => dispatch(removePage(single))}
                                className="opacity-0 invisible ml-2 group-hover:visible group-hover:opacity-100 "
                            >
                                <FontAwesomeIcon className="" icon={faClose} />
                            </button>
                        </p>
                    ),
                })
            ),
        ],
    };

    if (shouldAdd && data?.children && data.children) {
        data.children = [
            ...data.children,
            {
                name: "Enter Input",
                type: IFileType.Folder,
                Input: (
                    <PureTextInputTaker
                        action={addPage}
                        previousData={pages}
                        shouldAdd={shouldAdd}
                        onClose={() => {
                            setShouldAdd(false);
                        }}
                    />
                ),
            },
        ];
    }

    return (
        <div className="commonBox">
            <div className="commonBox-title-wrap">
                <Image
                    width={32}
                    height={26}
                    src="/icons/file-icon.png"
                    alt="code"
                />
                <h4>Pages</h4>
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
