import TechnologyBox from "@/Components/ToolsComponents/TechnologyBox/TechnologyBox";
import ToolLayout from "@/Layout/ToolsLayout/ToolLayout";
import { ITechnology } from "@/interface";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import PagesBox from "@/Components/ToolsComponents/PagesBox/PagesBox";
import FrameworkBox from "@/Components/ToolsComponents/FrameworkBox/FrameworkBox";
import NpmPackageBox from "@/Components/ToolsComponents/NpmPackageBox/NpmPackageBox";
import HooksBox from "@/Components/ToolsComponents/HooksBox/HooksBox";
import AuthBox from "@/Components/ToolsComponents/AuthBox/AuthBox";
import GeneratorButton from "@/Components/Shared/GeneratorButton";
import { allUrls } from "@/utils/allUrl";
import useCheckAppName from "@/Hooks/useCheckAppName";
import { addName } from "@/redux/features/basicInfo/basicInfo";
import { motion } from "framer-motion";
import { clearApis } from "@/redux/features/frontEndGen/frontEndGen";
type Props = {};

const ReactTem = (props: Props) => {
  const name = useAppSelector((state) => state.basicInfo.name);
  const dispatch = useAppDispatch();
  const { error } = useCheckAppName();
  //remove redux state
  useEffect(() => {
    dispatch(clearApis());
  }, [dispatch]);

  return (
    <ToolLayout>
      <div>
        <div className="page-upper-content-wrap">
          <div className="flex gap-3">
            <h1 className="text-3xl font-semibold font-robot">
              Create React Template For
            </h1>
            <input
              className={`border-b-2 font-semibold  bg-transparent placeholder:text-white font-robot text-2xl focus:outline-none focus:border-0 ${
                name?.length
                  ? error
                    ? "border-error-primary"
                    : "border-transparent"
                  : "border-error-primary"
              }`}
              value={name}
              autoFocus={true}
              onChange={(e) => dispatch(addName(e.target.value))}
              type="text"
              placeholder="Enter Project name"
            />
          </div>
          <div>
            <GeneratorButton url={allUrls.reactGenURL(name)}></GeneratorButton>
          </div>
        </div>
        <div className="grid gap-4  grid-cols-1 xl:grid-cols-4">
          <TechnologyBox></TechnologyBox>
          <PagesBox></PagesBox>
          <div className="col-span-2">
            <FrameworkBox></FrameworkBox>
          </div>
          <div className="col-span-2">
            <NpmPackageBox></NpmPackageBox>
          </div>
          <HooksBox></HooksBox>
          <AuthBox></AuthBox>
        </div>
      </div>
    </ToolLayout>
  );
};

export default ReactTem;
