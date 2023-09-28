import TechnologyBox from "@/Components/ToolsComponents/TechnologyBox/TechnologyBox";
import ToolLayout from "@/Layout/ToolsLayout/ToolLayout";
import { ITechnology } from "@/interface";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { useSelector } from "react-redux";
import {
  addName,
  addTechnology,
} from "@/redux/features/frontEndGen/frontEndGen";
import React from "react";
import PagesBox from "@/Components/ToolsComponents/PagesBox/PagesBox";
import FrameworkBox from "@/Components/ToolsComponents/FrameworkBox/FrameworkBox";
import NpmPackageBox from "@/Components/ToolsComponents/NpmPackageBox/NpmPackageBox";
import HooksBox from "@/Components/ToolsComponents/HooksBox/HooksBox";
import AuthBox from "@/Components/ToolsComponents/AuthBox/AuthBox";
import GeneratorButton from "@/Components/Shared/GeneratorButton";
import { allUrls } from "@/utils/allUrl";

type Props = {};

const ReactTem = (props: Props) => {
  const name = useAppSelector((state) => state.frontEndGen.name);
  const dispatch = useAppDispatch();
  return (
    <ToolLayout>
      <div>
        <div className="flex justify-between items-center mt-2 mb-5">
          <div className="flex gap-3">
            <h1 className="text-3xl font-semibold font-robot">
              Create React Template For
            </h1>
            <input
              className={`border-b-2 font-semibold  bg-transparent placeholder:text-white font-robot text-2xl focus:outline-none focus:border-0 ${
                name?.length ? "border-transparent" : "border-error-primary"
              }`}
              value={name}
              autoFocus
              onChange={(e) => dispatch(addName(e.target.value))}
              type="text"
              placeholder="Enter Project name"
            />
          </div>
          <div>
            <GeneratorButton url={allUrls.reactGenURL(name)}></GeneratorButton>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-4">
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
