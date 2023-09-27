import TechnologyBox from "@/Components/ToolsComponents/TechnologyBox/TechnologyBox";
import ToolLayout from "@/Layout/ToolsLayout/ToolLayout";
import { ITechnology } from "@/interface";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { useSelector } from "react-redux";
import { addTechnology } from "@/redux/features/frontEndGen/frontEndGen";
import React from "react";
import PagesBox from "@/Components/ToolsComponents/PagesBox/PagesBox";

type Props = {};

const ReactTem = (props: Props) => {
  const { technology, pages } = useAppSelector((state) => state.frontEndGen);
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
      </div>
    </ToolLayout>
  );
};

export default ReactTem;
