'use client'

import { reduxFileData } from "@/helper/dataCreator/reduxFileData";
import { IFileStructure, IFileType } from "@/interface/common";
import { useAppSelector } from "@/redux/app/store";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import FileExplorer from "../home/FileExplorer";
import { addApis } from "@/redux/features/frontEndGen/frontEndGen";
import ReduxCreatedFileCloseButton from "./ReduxCreatedFileCloseButton";
import PureTextInputTaker from "../shared/PureTextInputTaker";

export default function ReduxApiSliceCreatorBox() {
    const apis = useAppSelector((state) => state.frontEndGen.apis);
    const technology = useAppSelector((state) => state.basicInfo.technology);

    const [shouldAdd, setShouldAdd] = useState(false);
    const data: IFileStructure = reduxFileData.getReduxFileData(
        technology,
        apis.map(
            (single): IFileStructure => ({
                name: single,
                type: IFileType.Folder,
                language: technology,
                Input: (
                    <ReduxCreatedFileCloseButton
                        name={single}
                    />
                ),
                children: reduxFileData.getChildrenOfFeatures(single, technology),
            })
        )
    );

    // handler adding new api
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
                    />
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
                />
                <h4>Redux</h4>
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
