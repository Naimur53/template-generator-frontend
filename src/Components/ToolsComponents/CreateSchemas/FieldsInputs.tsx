import { IFields } from "@/interface";
import React from "react";

type Props = {} & IFields;

const FieldsInputs = ({
  fieldName,
  type,
  length,
  isRequired,
  isUnique,
}: Props) => {
  return (
    <div>
      <form></form>
    </div>
  );
};

export default FieldsInputs;
