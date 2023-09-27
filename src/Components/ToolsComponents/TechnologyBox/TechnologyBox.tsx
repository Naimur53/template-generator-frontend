import { ITechnology } from "@/interface";
import Image from "next/image";
import React from "react";

type Props = {
  technology: ITechnology;
  onChange: (technology: ITechnology) => void;
};

const TechnologyBox: React.FC<Props> = ({ technology, onChange }) => {
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
          onClick={() => onChange(ITechnology.JavaScript)}
          className={`${technology === ITechnology.JavaScript ? "active" : ""}`}
        >
          <Image
            width={32}
            height={26}
            src="/images/javascript-img.png"
            alt="code"
            layout="responsive"
            className="w-full"
          ></Image>
        </button>
        <button
          onClick={() => onChange(ITechnology.Typescript)}
          className={`${technology === ITechnology.Typescript ? "active" : ""}`}
        >
          <Image
            width={32}
            height={26}
            src="/images/typescript-img.png"
            alt="code"
            layout="responsive"
            className="w-full"
          ></Image>
        </button>
      </div>
    </div>
  );
};

export default TechnologyBox;
