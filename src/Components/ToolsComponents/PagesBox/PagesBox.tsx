import { useAppDispatch } from "@/redux/app/store";
import { addPage, removePage } from "@/redux/features/frontEndGen/frontEndGen";
import { textChecker } from "@/utils/textChecker";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
type Props = {
  pages: string[];
};

const PagesBox: React.FC<Props> = ({ pages }) => {
  const [shouldAdd, setShouldAdd] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [error, setError] = useState<{ isError: boolean; message: string }>({
    isError: false,
    message: "",
  });
  const dispatch = useAppDispatch();

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value);
  };
  const handleAddNewPage = () => {
    if (pages.includes(inputText)) {
      setError({ isError: true, message: "page already exits" });
      return;
    }
    if (textChecker.testCamelCase(inputText) && inputText.length) {
      dispatch(addPage(inputText));
      setShouldAdd(false);
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
  const handleCloseInput = () => {
    if (inputText) {
      dispatch(removePage(inputText));
    }
    setInputText("");
    setError({ isError: false, message: "" });
    setShouldAdd(false);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if the "Enter" key (key code 13) was pressed
    if (e.key === "Enter") {
      handleAddNewPage();
    }
  };
  return (
    <div className="commonBox">
      <div className="commonBox-title-wrap">
        <Image
          width={32}
          height={26}
          src="/icons/file-icon.png"
          alt="code"
        ></Image>
        <h4>Pages</h4>
        <button
          className="ml-auto opacity-100 hover:opacity-100 transition-all hover:text-blue-500 p-2"
          onClick={() => setShouldAdd(true)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div>
        {/* all pages */}
        {pages.map((single) => (
          <div key={single}>
            <p key={single} className="group">
              {single}
              <button
                onClick={() => dispatch(removePage(single))}
                className="opacity-0 invisible ml-2 group-hover:visible group-hover:opacity-100 "
              >
                <FontAwesomeIcon className="" icon={faClose} />
              </button>
            </p>
          </div>
        ))}
        {/* for new */}
        {shouldAdd && (
          <div>
            <div className="flex justify-between pr-2 items-center">
              <input
                className={`bg-transparent border-blue-400 border rounded placeholder:text-white/60 placeholder:text-sm px-2 py-1 transition-all ${
                  error.isError && "error"
                }`}
                placeholder="Enter uniq camelcase  name"
                type="text"
                autoFocus
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                // onBlur={handleAddNewPage}
              />
              <button onClick={() => handleCloseInput()} className="  ml-2 ">
                <FontAwesomeIcon className="" icon={faClose} />
              </button>
            </div>
            {error.message && (
              <p className="text-red-500 text-sm mt-1">*{error.message} </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PagesBox;
