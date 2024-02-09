import useInput from "@/hooks/useInput";
import { useAppDispatch } from "@/redux/app/store";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

interface TPureTextInputTakerProps {
    previousData: string[];
    action: ActionCreatorWithPayload<string>;
    shouldAdd: boolean;
    onClose: () => void;
}

export default function PureTextInputTaker({ previousData, action, onClose, shouldAdd }: TPureTextInputTakerProps) {
    const dispatch = useAppDispatch();
    const {
        handleAddNewValueToStore,
        handleCloseInput,
        handleInputChange,
        error,
    } = useInput();
    const submit = () => {
        handleAddNewValueToStore(previousData, (value) => {
            dispatch(action(value));
            onClose();
        });
    };
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Check if the "Enter" key (key code 13) was pressed
        if (e.key === "Enter") {
            submit();
        }
    };
    return (
        <div>
            {shouldAdd && (
                <div>
                    <div className="flex justify-between pr-2 items-center relative">
                        <input
                            className={`bg-transparent w-[120px] border-blue-400 border rounded placeholder:text-white/60 placeholder:text-sm px-2 py-1 transition-all ${error.isError && "error"
                                }`}
                            placeholder="Uniq name"
                            type="text"
                            autoFocus
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                        // onBlur={handleAddNewPage}
                        />
                        <button onClick={() => submit()} className=" text-green-400  ml-2 ">
                            <FontAwesomeIcon className="" icon={faCheck} />
                        </button>
                        <button
                            onClick={() => handleCloseInput(onClose)}
                            className="  ml-2 "
                        >
                            <FontAwesomeIcon className="" icon={faClose} />
                        </button>
                    </div>
                    {error.message && (
                        <p className="text-red-500 text-sm mt-1 absolute">
                            *{error.message}{" "}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};
