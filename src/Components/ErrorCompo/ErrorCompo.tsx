import React from "react";

type Props = {
  error?: string;
};

const ErrorCompo = (props: Props) => {
  return (
    <div className="flex justify-center items-center text-red-900 font-bold text-xl">
      <span>{props.error || "Something went wrong"}</span>
    </div>
  );
};

export default ErrorCompo;
