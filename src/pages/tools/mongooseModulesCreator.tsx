import React from "react";
import GeneratorButton from "@/Components/Shared/GeneratorButton";
import CreateSchemas from "@/Components/ToolsComponents/CreateSchemas/CreateSchemas";
import ModulesBox from "@/Components/ToolsComponents/ModulesBox/ModulesBox";
import useCheckAppName from "@/Hooks/useCheckAppName";
import ToolLayout from "@/Layout/ToolsLayout/ToolLayout";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { addName } from "@/redux/features/basicInfo/basicInfo";
import { allUrls } from "@/utils/allUrl";

type Props = {};

const MongooseModulesCreator = (props: Props) => {
  const name = useAppSelector((state) => state.basicInfo.name);
  const dispatch = useAppDispatch();
  const { error } = useCheckAppName();
  return (
    <ToolLayout>
      <div className="page-upper-content-wrap">
        <div className="flex gap-3">
          <h1 className="text-3xl font-semibold font-robot">
            Create Mongoose Modules
          </h1>
        </div>
        <div>
          <GeneratorButton
            url={allUrls.mongooseModulesGenURL(name)}
          ></GeneratorButton>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[24px]">
        <ModulesBox moduleOnly={true}></ModulesBox>
        <div className=" ">
          <CreateSchemas></CreateSchemas>
        </div>
      </div>
    </ToolLayout>
  );
};

export default MongooseModulesCreator;
