'use client'

import CreateSchemas from "@/app/components/toolsComponents/CreateSchemas";
import GeneratorButton from "@/app/components/toolsComponents/GeneratorButton";
import ModulesBox from "@/app/components/toolsComponents/ModulesBox";
import { useAppSelector } from "@/redux/app/store";
import { allUrls } from "@/utils/allUrl";

export default function PostgresModules() {

    const name = useAppSelector((state) => state.basicInfo.name);

    return (
        <div className=''>
            <div className="page-upper-content-wrap">
                <div className="flex gap-3">
                    <h1 className="text-3xl font-semibold font-robot">
                        Create Postgres Modules
                    </h1>
                </div>
                <div>
                    <GeneratorButton
                        url={allUrls.postgresModulesGenURL(name)}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-[24px]">
                <ModulesBox moduleOnly={true} />
                <div className=" ">
                    <CreateSchemas />
                </div>
            </div>
        </div>
    );
};
