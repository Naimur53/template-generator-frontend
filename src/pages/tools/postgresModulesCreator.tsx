import GeneratorButton from "@/Components/Shared/GeneratorButton";
import CreateSchemas from "@/Components/ToolsComponents/CreateSchemas/CreateSchemas";
import ModulesBox from "@/Components/ToolsComponents/ModulesBox/ModulesBox";
import useCheckAppName from "@/Hooks/useCheckAppName";
import ToolLayout from "@/Layout/ToolsLayout/ToolLayout";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { addName } from "@/redux/features/basicInfo/basicInfo";
import { allUrls } from "@/utils/allUrl";
import React from "react";
type Props = {};

const PostgresModulesCreator = (props: Props) => {
  const name = useAppSelector((state) => state.basicInfo.name);
  const dispatch = useAppDispatch();
  const { error } = useCheckAppName();
  return (
    <ToolLayout>
      <div className="flex justify-between items-center mt-2 mb-5">
        <div className="flex gap-3">
          <h1 className="text-3xl font-semibold font-robot">
            Create Postgres Modules
          </h1>
        </div>
        <div>
          <GeneratorButton
            url={allUrls.postgresModulesGenURL(name)}
          ></GeneratorButton>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[24px]">
        <ModulesBox></ModulesBox>
        <div className=" ">{/* <CreateSchemas></CreateSchemas> */}</div>
      </div>
    </ToolLayout>
  );
};

export default PostgresModulesCreator;
