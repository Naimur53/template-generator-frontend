import TechnologyBox from "@/Components/ToolsComponents/TechnologyBox/TechnologyBox";
import ToolLayout from "@/Layout/ToolsLayout/ToolLayout";
import { ITechnology } from "@/interface";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { useSelector } from "react-redux";
import { addTechnology } from "@/redux/features/frontEndGen/frontEndGen";
import React from "react";
import PagesBox from "@/Components/ToolsComponents/PagesBox/PagesBox";
import FrameworkBox from "@/Components/ToolsComponents/FrameworkBox/FrameworkBox";
import NpmPackageBox from "@/Components/ToolsComponents/NpmPackageBox/NpmPackageBox";
import HooksBox from "@/Components/ToolsComponents/HooksBox/HooksBox";

type Props = {};

const ReactTem = (props: Props) => {
  const { technology, pages, cssFrameWork } = useAppSelector(
    (state) => state.frontEndGen
  );
  const dispatch = useAppDispatch();

  const handleTechnologyChange = (givenTech: ITechnology): void => {
    dispatch(addTechnology(givenTech));
  };
  return (
    <ToolLayout>
      <div className="grid gap-4 grid-cols-4">
        <TechnologyBox
          technology={technology}
          onChange={handleTechnologyChange}
        ></TechnologyBox>
        <PagesBox pages={pages}></PagesBox>
        <div className="col-span-2">
          <FrameworkBox activeFrameWork={cssFrameWork}></FrameworkBox>
        </div>
        <div className="col-span-2">
          <NpmPackageBox></NpmPackageBox>
        </div>
        <HooksBox></HooksBox>
      </div>
    </ToolLayout>
  );
};

export default ReactTem;
