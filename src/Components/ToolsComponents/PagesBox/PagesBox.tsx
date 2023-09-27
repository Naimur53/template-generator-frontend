import Image from "next/image";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
type Props = {
  pages: string[];
};

const PagesBox: React.FC<Props> = ({ pages }) => {
  const [shouldAdd, setShouldAdd] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value);
  };
  const handleAddNewPage = () => {
    setShouldAdd(false);
    console.log(inputText);
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
          <FaPlus></FaPlus>
        </button>
      </div>
      <div>
        {/* all pages */}
        {pages.map((single) => (
          <p key={single} className="">
            {single}
          </p>
        ))}
        {/* for new */}
        {shouldAdd && (
          <div>
            <input
              className="bg-transparent border-blue-400 border rounded placeholder:text-white/60 px-2 py-1"
              placeholder="Enter uniqe page name"
              type="text"
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              onBlur={handleAddNewPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PagesBox;
