import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { addHook, removeHook } from "@/redux/features/frontEndGen/frontEndGen";
import Image from "next/image";
import React from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomLink from "@/Components/Shared/CustomLink";
type Props = {};

const HooksBox = (props: Props) => {
  const selectedHooks = useAppSelector((state) => state.frontEndGen.hooks);
  const dispatch = useAppDispatch();
  const allHooks = [
    "useToggle",
    "useTimeout",
    "useDebounce",
    "useUpdateEffect",
    "useArray",
    "usePrevious",
    "useStateWithHistory",
    "useStorage",
    "useFetch",
    "useEventListener",
    "useOnScreen",
    "useWindowSize",
    "useAsync",
  ];
  const isSelected = (name: string): boolean => {
    return Boolean(selectedHooks.find((single) => single === name));
  };
  const handleCheckbox = (name: string) => {
    if (isSelected(name)) {
      dispatch(removeHook(name));
    } else {
      dispatch(addHook(name));
    }
  };
  return (
    <div>
      <div className="commonBox">
        <div className="commonBox-title-wrap">
          <Image
            width={32}
            height={26}
            src="/icons/hooks-icon.png"
            alt="code"
          ></Image>
          <h4>Hooks</h4>
        </div>
        <div className="h-[150px] overflow-y-scroll">
          {allHooks.map((single, i) => (
            <div key={single} className="flex justify-between pr-4">
              <div className="flex items-center gap-2 font-semibold pb-2 hover:opacity-70 opacity-100 transition-all ">
                <input
                  type="checkbox"
                  id={single}
                  className="cursor-pointer w-[15px] h-[15px]"
                  checked={isSelected(single)}
                  onChange={() => handleCheckbox(single)}
                />
                <label className="cursor-pointer" htmlFor={single}>
                  {single}
                </label>
              </div>
              <CustomLink
                target="_blank"
                href={`https://dev.to/arafat4693/15-useful-react-custom-hooks-that-you-can-use-in-any-project-2ll8#${
                  i + 1
                }-${single.toLocaleLowerCase()}`}
              >
                <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>
              </CustomLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HooksBox;
