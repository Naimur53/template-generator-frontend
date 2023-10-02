import PureTextInputTaker from "@/Components/Shared/PureTextInputTaker";
import useInput from "@/Hooks/useInput";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import {
  addNewModuleByName,
  removeModuleByName,
} from "@/redux/features/backEndGen/backEndGen";
import { removePage } from "@/redux/features/frontEndGen/frontEndGen";
import { faClose, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
type Props = {};

const ModulesBox: React.FC<Props> = () => {
  const pages = useAppSelector((state) =>
    state.backendGen.map((single) => single.name)
  );
  const dispatch = useAppDispatch();

  const [shouldAdd, setShouldAdd] = useState(false);

  return (
    <div className="commonBox">
      <div className="commonBox-title-wrap">
        <Image
          width={32}
          height={26}
          src="/icons/file-icon.png"
          alt="code"
        ></Image>
        <h4>Modules</h4>
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
                onClick={() => dispatch(removeModuleByName(single))}
                className="opacity-0 invisible ml-2 group-hover:visible group-hover:opacity-100 "
              >
                <FontAwesomeIcon className="" icon={faClose} />
              </button>
            </p>
          </div>
        ))}
        {/* for new */}
        {shouldAdd && (
          <PureTextInputTaker
            action={addNewModuleByName}
            previousData={pages}
            shouldAdd={shouldAdd}
            onClose={() => {
              setShouldAdd(false);
            }}
          ></PureTextInputTaker>
        )}
      </div>
    </div>
  );
};

export default ModulesBox;
