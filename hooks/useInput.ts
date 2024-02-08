import { useState } from "react";
import { textChecker } from "@/utils/textChecker";

const useInput = () => {
  const [inputText, setInputText] = useState<string>("");
  const [error, setError] = useState<{ isError: boolean; message: string }>({
    isError: false,
    message: "",
  });

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value);
  };

  const handleAddNewValueToStore = (
    preViousData: string[],
    cb: (value: string) => void
  ) => {
    if (preViousData.includes(inputText)) {
      setError({ isError: true, message: "Already exits" });
      return;
    }
    if (textChecker.testCamelCase(inputText) && inputText.length) {
      cb(inputText);
      setInputText("");
      setError({ isError: false, message: "" });
    } else {
      setError({
        isError: true,
        message:
          "use camel-case (demo,demoPage) and no special character and number allowed!",
      });
    }
  };
  const handleCloseInput = (cb: () => void) => {
    setInputText("");
    setError({ isError: false, message: "" });
    cb();
  };

  return {
    handleCloseInput,
    handleAddNewValueToStore,
    handleInputChange,
    error,
  };
};

export default useInput;
