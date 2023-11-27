import React from "react";
import ReduxApiSliceCreatorBox from "../ToolsComponents/ReduxApiSliceCreatorBox/ReduxApiSliceCreatorBox";
import AnimatedReduxFeaturesCreator from "./AnimatedReduxFeaturesCreator";

type Props = {};

const ReduxExplain = (props: Props) => {
  return (
    <section>
      <div className="container  section-padding">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="home-heading  text-center">
            Redux RTK Query Generator
          </h2>
          <p className="w-[60%] mt-10">
            Temgen simplifies the creation of all your CRUD RTK operations by
            allowing you to generate code effortlessly. Just provide your API
            name, and let Temgen handle the rest.
          </p>
        </div>
        <div className="flex justify-center mt-20 ">
          <div className="w-full xl:w-[900px]">
            <AnimatedReduxFeaturesCreator></AnimatedReduxFeaturesCreator>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReduxExplain;
