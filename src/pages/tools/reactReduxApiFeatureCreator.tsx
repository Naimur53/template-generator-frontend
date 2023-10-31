import GeneratorButton from "@/Components/Shared/GeneratorButton";
import ReduxApiSliceCreatorBox from "@/Components/ToolsComponents/ReduxApiSliceCreatorBox/ReduxApiSliceCreatorBox";
import TechnologyBox from "@/Components/ToolsComponents/TechnologyBox/TechnologyBox";
import ToolLayout from "@/Layout/ToolsLayout/ToolLayout";
import { allUrls } from "@/utils/allUrl";
import React from "react";

type Props = {};

const ReactReduxApiFeatureCreator = (props: Props) => {
  return (
    <div>
      <ToolLayout>
        <div>
          <div className="page-upper-content-wrap">
            <div className="flex gap-3">
              <h1 className="text-3xl font-semibold font-robot">
                Create Redux Features
              </h1>
            </div>
            <div>
              <GeneratorButton
                url={allUrls.reduxFeatureGenURL()}
              ></GeneratorButton>
            </div>
          </div>
          <div className="grid gap-4  grid-cols-1 xl:grid-cols-4">
            <TechnologyBox></TechnologyBox>

            <div className="col-span-3">
              <ReduxApiSliceCreatorBox></ReduxApiSliceCreatorBox>
            </div>
          </div>
        </div>
      </ToolLayout>
    </div>
  );
};

export default ReactReduxApiFeatureCreator;
