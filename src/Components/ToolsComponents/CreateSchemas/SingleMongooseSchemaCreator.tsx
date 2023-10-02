import { IModule } from "@/interface";
import React, { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type Props = {} & IModule;

const SingleMongooseSchemaCreator = ({
  name,
  fields,
  shouldAddPaginationAndQuery,
  exactTermFields,
  searchTermFields,
}: Props) => {
  const [fieldsNUmber, setFieldsNumber] = useState<number[]>([1]);

  const handleIncreaseFieldsNumber = () => {
    setFieldsNumber((pre) => {
      const maxNum = Math.max(...pre);
      return [...pre, maxNum];
    });
  };
  return (
    <div className="mx-2 border border-blue-500 rounded-3xl p-5">
      <div className="flex justify-between items-center">
        <h6 className="text-xl capitalize">{name}</h6>

        <button onClick={() => {}} className=" ml-2 ">
          <FontAwesomeIcon className="" icon={faPlus} />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default SingleMongooseSchemaCreator;
