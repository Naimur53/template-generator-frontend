import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ReduxCreatedFileCloseButton from "../ToolsComponents/ReduxApiSliceCreatorBox/ReduxCreatedFileCloseButton";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { reduxFileData } from "@/helper/dataCreator/reduxFileData";
import { IFileStructure, IFileType } from "@/interface/common";
import PureTextInputTaker from "../Shared/PureTextInputTaker";
import { addApis } from "@/redux/features/frontEndGen/frontEndGen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import FileExplorer from "../FileExpoler/FileExpoler";
import CustomSelect, { Option } from "../Form/CustomSelection";
import { ITechnology } from "@/interface";
import useOnScreen from "@/Hooks/useOnScreen";

type Props = {};

const AnimatedReduxFeaturesCreator = (props: Props) => {
  const [apis, setApis] = useState<string[]>(["user"]);
  const container = useRef<HTMLDivElement>(null);
  const visible = useOnScreen({ ref: container, rootMargin: "0px" });
  const dispatch = useAppDispatch();
  const options: Option[] = [
    { label: "Javascript", value: ITechnology.JavaScript },
    { label: "TypeScript", value: ITechnology.Typescript },
  ];
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [shouldAdd, setShouldAdd] = useState(true);
  const technology: ITechnology = selectedOption.value as ITechnology;
  const [typedText, setTypedText] = useState("");
  const typingSpeed = 700; // Adjust the typing speed (milliseconds per character)

  useEffect(() => {
    const textToType = "book";
    // check is component on screen
    if (!visible) return;

    // for preventing animation 2 time
    // if (apis.length === 2) {
    //   setShouldAdd(false);
    //   return;
    // }
    const typeInterval = setInterval(() => {
      setTypedText((pre) => {
        if (pre.length < textToType.length) {
          return pre + textToType[pre.length];
        }
        return textToType;
      });
    }, typingSpeed);

    // stop
    const stopTimeout = setTimeout(() => {
      clearInterval(typeInterval);
      setApis((pre) => {
        return [...pre, textToType];
      });
      setShouldAdd((pre) => false);
    }, typingSpeed * textToType.length);
    return () => {
      setTypedText("");
      clearInterval(typeInterval);
      clearTimeout(stopTimeout);
      setShouldAdd((pre) => true);
      setApis((pre) => {
        return ["user"];
      });
    };
  }, [visible]);

  const data: IFileStructure = reduxFileData.getReduxFileData(
    technology,
    apis.map(
      (single): IFileStructure => ({
        name: single,
        type: IFileType.Folder,
        language: technology,
        Input: (
          <ReduxCreatedFileCloseButton
            name={single}
          ></ReduxCreatedFileCloseButton>
        ),
        children: reduxFileData.getChildrenOfFeatures(single, technology),
      })
    )
  );

  // handler adding new api
  if (shouldAdd && data?.children && data.children[1].children) {
    data.children[1].children = [
      ...data.children[1].children,
      {
        name: "Enter Input",
        type: IFileType.Folder,
        Input: <input value={typedText}></input>,
      },
    ];
  }

  const handleSelectChange = (value: Option) => {
    // if (typeof value === Option) {
    setSelectedOption(value);
    // }
    // Your additional logic on selection change goes here
  };
  return (
    <div ref={container}>
      <div className="commonBox  p-8 xl:min-h-[615px]">
        <div className="commonBox-title-wrap">
          <Image
            width={32}
            height={26}
            src="/icons/redux-icon.png"
            alt="code"
          ></Image>
          <h4>Redux</h4>
          <div className=" ml-auto">
            <CustomSelect
              options={options}
              onChange={handleSelectChange}
              value={selectedOption}
              //   primaryColor="cyan"
              //   classNames={{
              //     menu: "bg-main-dark absolute transition-all z-20 w-full pt-3",
              //     searchContainer: "bg-main-dark",
              //   }}
            ></CustomSelect>
          </div>
        </div>
        <div className="">
          {visible && <FileExplorer data={data}></FileExplorer>}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default AnimatedReduxFeaturesCreator;
