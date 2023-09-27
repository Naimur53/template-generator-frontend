import CustomLink from "@/Components/Shared/CustomLink";
import { ICommonPackage } from "@/interface";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { addNpmPackages } from "@/redux/features/frontEndGen/frontEndGen";
import commonReactNextPackages from "@/utils/npmPackages";
import React, { useState } from "react";

type Props = {};

const NpmPackageBoxPopupContent = (props: Props) => {
  const npmPackages = useAppSelector((state) => state.frontEndGen.npmPackages);
  const dispatch = useAppDispatch();
  const [newSelectedPackages, setNewSelectedPackages] = useState<
    ICommonPackage[]
  >([]);

  const unSelectedNpmPackages = commonReactNextPackages.filter((single) => {
    const isInclude = npmPackages.find(
      (singleSelected) => singleSelected.name === single.name
    );
    return !Boolean(isInclude?.name);
  });
  const isSelected = (name: string) =>
    Boolean(newSelectedPackages.find((single) => single.name === name)?.name);
  console.log(newSelectedPackages);
  const handleAddNewPage = (npmPackage: ICommonPackage) => {
    if (isSelected(npmPackage.name)) {
      setNewSelectedPackages((pre) =>
        pre.filter((single) => single.name !== npmPackage.name)
      );
    } else {
      setNewSelectedPackages((pre) => [...pre, npmPackage]);
    }
  };
  const handleAddToStore = () => {
    dispatch(addNpmPackages(newSelectedPackages));
    setNewSelectedPackages([]);
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-robot font-semibold">
          Select Npm Packages
        </h2>
        <button
          disabled={!Boolean(newSelectedPackages.length)}
          className="font-bold text-lg font-robot rounded-lg bg-blue-500 px-3 py-1 disabled:grayscale grayscale-0 transition-all"
          onClick={handleAddToStore}
        >
          Add
        </button>
      </div>
      <div className="h-[400px] overflow-y-scroll pr-2 ">
        {unSelectedNpmPackages.length ? (
          <div className="grid grid-cols-4 gap-3 mt-5">
            {unSelectedNpmPackages.map((single) => (
              <button
                onClick={() => handleAddNewPage(single)}
                className={`p-2 rounded-2xl bg-primary flex items-center border-2 justify-center flex-col transition-all ${
                  isSelected(single.name)
                    ? "border-blue-400 text-blue-400"
                    : "border-transparent text-white"
                }`}
                key={single.name}
              >
                <p className="text-lg font-robot text-center">{single.name}</p>
                <div className="hover:text-blue-300 mt-2 hover:underline">
                  <CustomLink target="_blank" href={single.doc}>
                    {single.version}
                  </CustomLink>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-error-primary text-2xl font-bold">
              No Packages found!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NpmPackageBoxPopupContent;
