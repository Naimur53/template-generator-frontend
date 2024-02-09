"use client";

import { useAppSelector } from "@/redux/app/store";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { toast } from "react-toastify";

const useCheckAppName = () => {
  const name = useAppSelector((state) => state.basicInfo.name);
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
  return {
    error,
  };
};
export default useCheckAppName;
