import { useRef, useState } from "react";

export interface Option {
    label: string;
    value: string;
}

interface CustomSelectProps {
    options: Option[];
    value: Option;
    onChange: (value: Option) => void;
}

export default function CustomSelect({ options, value, onChange, }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block" ref={selectRef}>
            <div
                onClick={toggleDropdown}
                className="cursor-pointer block appearance-none w-full  bg-main-dark border border-cyan-400 hover:border-gray-500 px-4 text-cyan-400 py-2  rounded leading-tight focus:outline-none text-center focus:border-blue-500 transition-all "
            >
                <span>
                    {options.find((option) => option.value === value.value)?.label}
                </span>
            </div>
            {isOpen && (
                <div className="absolute mt-1 w-full  border border-gray-300 rounded shadow-lg bg-main-dark z-20">
                    {options.map((option) => (
                        <button
                            className="px-1 py-1 hover:bg-cyan-400 text-center w-full transition-all hover:text-black"
                            key={option.value}
                            onClick={() => {
                                closeDropdown();
                                onChange(option);
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
