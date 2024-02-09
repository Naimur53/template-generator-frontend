'use client'

import CreateSchemas from "@/app/components/toolsComponents/CreateSchemas";
import GeneratorButton from "@/app/components/toolsComponents/GeneratorButton";
import ModulesBox from "@/app/components/toolsComponents/ModulesBox";
import useCheckAppName from "@/hooks/useCheckAppName";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { addName } from "@/redux/features/basicInfo/basicInfo";
import { allUrls } from "@/utils/allUrl";

export default function PostgresTemplate() {

    const name = useAppSelector((state) => state.basicInfo.name);
    const dispatch = useAppDispatch();
    const { error } = useCheckAppName();

    return (
        <div className=''>
            <div className="page-upper-content-wrap">
                <div className="flex gap-3">
                    <h1 className="text-3xl font-semibold font-robot">
                        Create Postgres Template For
                    </h1>
                    <input
                        className={`border-b-2 font-semibold  bg-transparent placeholder:text-white font-robot text-2xl focus:outline-none focus:border-0 ${name?.length
                            ? error
                                ? "border-error-primary"
                                : "border-transparent"
                            : "border-error-primary"
                            }`}
                        value={name}
                        autoFocus
                        onChange={(e) => dispatch(addName(e.target.value))}
                        type="text"
                        placeholder="Enter Project name"
                    />
                </div>
                <div>
                    <GeneratorButton
                        url={allUrls.postgresTemGenURL(name)}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-[24px]">
                <ModulesBox />
                <div className=" ">
                    <CreateSchemas />
                </div>
            </div>
        </div>
    );
};
