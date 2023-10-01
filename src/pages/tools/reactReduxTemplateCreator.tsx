import GeneratorButton from "@/Components/Shared/GeneratorButton";
import AuthBox from "@/Components/ToolsComponents/AuthBox/AuthBox";
import FrameworkBox from "@/Components/ToolsComponents/FrameworkBox/FrameworkBox";
import HooksBox from "@/Components/ToolsComponents/HooksBox/HooksBox";
import NpmPackageBox from "@/Components/ToolsComponents/NpmPackageBox/NpmPackageBox";
import PagesBox from "@/Components/ToolsComponents/PagesBox/PagesBox";
import ReduxApiSliceCreatorBox from "@/Components/ToolsComponents/ReduxApiSliceCreatorBox/ReduxApiSliceCreatorBox";
import TechnologyBox from "@/Components/ToolsComponents/TechnologyBox/TechnologyBox";
import { useDebounce } from "@/Hooks/useDebounce";
import ToolLayout from "@/Layout/ToolsLayout/ToolLayout";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { addName } from "@/redux/features/frontEndGen/frontEndGen";
import { allUrls } from "@/utils/allUrl";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

type Props = {};

const ReactReduxTemplateCreator = (props: Props) => {
  const name = useAppSelector((state) => state.frontEndGen.name);
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce<string>(name || "demo", 500);
  const [error, setError] = useState(false);

  useEffect(() => {
    const camelCase = /^[a-z][a-zA-Z]*$/;
    if (!camelCase.test(debouncedValue)) {
      setError(true);
      toast.error(
        "Please enter project name in pure word no special character, space, or number allowed ",
        { autoClose: 5000 }
      );
    } else {
      setError(false);
    }
  }, [debouncedValue]);
  return (
    <ToolLayout>
      <div>
        <div className="flex justify-between items-center mt-2 mb-5">
          <div className="flex gap-3">
            <h1 className="text-3xl font-semibold font-robot">
              Create React Redux Template For
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
          <div className="col-span-2 row-span-2">
            <ReduxApiSliceCreatorBox></ReduxApiSliceCreatorBox>
          </div>
          <HooksBox></HooksBox>
          <AuthBox></AuthBox>
          <div className="col-span-2">
            <NpmPackageBox></NpmPackageBox>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default ReactReduxTemplateCreator;
