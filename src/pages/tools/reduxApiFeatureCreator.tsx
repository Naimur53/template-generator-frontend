import GeneratorButton from "@/Components/Shared/GeneratorButton";
import ReduxApiSliceCreatorBox from "@/Components/ToolsComponents/ReduxApiSliceCreatorBox/ReduxApiSliceCreatorBox";
import TechnologyBox from "@/Components/ToolsComponents/TechnologyBox/TechnologyBox";
import ToolLayout from "@/Layout/ToolsLayout/ToolLayout";
import { allUrls } from "@/utils/allUrl";
import React from "react";

type Props = {};

const ReduxApiFeatureCreator = (props: Props) => {
  return (
    <div>
      <ToolLayout>
        <div>
          <div className="flex justify-between items-center mt-2 mb-5">
            <div className="flex gap-3">
              <h1 className="text-3xl font-semibold font-robot">
                Create Redux Features For
              </h1>
            </div>
            <div>
              <GeneratorButton
                url={allUrls.reduxFeatureGenURL()}
              ></GeneratorButton>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-4">
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

export default ReduxApiFeatureCreator;
