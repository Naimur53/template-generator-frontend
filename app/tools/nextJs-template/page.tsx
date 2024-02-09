'use client'

import AuthBox from "@/app/components/toolsComponents/AuthBox";
import FrameworkBox from "@/app/components/toolsComponents/FrameworkBox";
import GeneratorButton from "@/app/components/toolsComponents/GeneratorButton";
import HooksBox from "@/app/components/toolsComponents/HooksBox";
import NpmPackageBox from "@/app/components/toolsComponents/NpmPackageBox";
import PagesBox from "@/app/components/toolsComponents/PagesBox";
import TechnologyBox from "@/app/components/toolsComponents/TechnologyBox";
import useCheckAppName from "@/hooks/useCheckAppName";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { addName } from "@/redux/features/basicInfo/basicInfo";
import { clearApis } from "@/redux/features/frontEndGen/frontEndGen";
import { allUrls } from "@/utils/allUrl";
import { useEffect } from "react";

export default function NextJsPage() {

    const name = useAppSelector((state) => state.basicInfo.name);
    const dispatch = useAppDispatch();
    const { error } = useCheckAppName();

    //remove redux state
    useEffect(() => {
        dispatch(clearApis());
    }, [dispatch]);

    return (
        <div>
            <div className="page-upper-content-wrap">
                <div className="flex gap-3">
                    <h1 className="text-3xl font-semibold font-robot">
                        Create Next Js Template For
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
                        isNextJs={true}
                        url={allUrls.nextGenURL(name)}
                    />
                </div>
            </div>
            <div className="grid gap-4  grid-cols-1 xl:grid-cols-4">
                <TechnologyBox />
                <PagesBox />
                <div className="col-span-2">
                    <FrameworkBox />
                </div>
                <div className="col-span-2">
                    <NpmPackageBox />
                </div>
                <HooksBox />
                <AuthBox />
            </div>
        </div>
    );
};
