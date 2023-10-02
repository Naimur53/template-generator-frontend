import { ITechnology } from "@/interface";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import { addTechnology } from "@/redux/features/basicInfo/basicInfo";

import Image from "next/image";
import React from "react";

type Props = {};

const TechnologyBox: React.FC<Props> = () => {
  const technology = useAppSelector((state) => state.basicInfo.technology);
  const dispatch = useAppDispatch();

  const handleTechnologyChange = (givenTech: ITechnology): void => {
    dispatch(addTechnology(givenTech));
  };
  return (
    <div className="commonBox">
      <div className="commonBox-title-wrap">
        <Image
          width={32}
          height={26}
          src="/icons/code-solid.png"
          alt="code"
        ></Image>
        <h4>Technology</h4>
      </div>
      <div className="technology-buttons-wrap">
        <button
          onClick={() => handleTechnologyChange(ITechnology.JavaScript)}
          className={`${technology === ITechnology.JavaScript ? "active" : ""}`}
        >
          <Image
            width={120}
            height={26}
            src="/images/javascript-img.png"
            alt="code"
            className="w-full"
          ></Image>
        </button>
        <button
          onClick={() => handleTechnologyChange(ITechnology.Typescript)}
          className={`${technology === ITechnology.Typescript ? "active" : ""}`}
        >
          <Image
            width={120}
            height={26}
            src="/images/typescript-img.png"
            alt="code"
            className="w-full"
          ></Image>
        </button>
      </div>
    </div>
  );
};

export default TechnologyBox;
