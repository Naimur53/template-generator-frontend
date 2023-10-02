import { useAppSelector } from "@/redux/app/store";
import Image from "next/image";
import React from "react";
import SingleMongooseSchemaCreator from "./SingleMongooseSchemaCreator";

type Props = {};

const CreateSchemas = (props: Props) => {
  const allModule = useAppSelector((state) => state.backendGen);
  return (
    <div>
      <div className="commonBox">
        <div className="commonBox-title-wrap">
          <Image
            width={32}
            height={26}
            src="/icons/schema-icon.png"
            alt="code"
          ></Image>
          <h4>Create Schemas</h4>
        </div>
        <div>
          {allModule.map((single) => (
            <SingleMongooseSchemaCreator key={single.name} {...single} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateSchemas;
