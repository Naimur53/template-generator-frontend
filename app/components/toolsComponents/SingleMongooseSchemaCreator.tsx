'use client'

import { IModule } from "@/interface";
import { addExactField, addNewSearchTermFields, setShouldAddPaginationAndQuery } from "@/redux/features/backEndGen/backEndGen";
import { faInfo, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-tailwindcss-select";
import { SelectValue } from "react-tailwindcss-select/dist/components/type";
import { toast } from "react-toastify";
import FieldsInputs from "./FieldsInputs";

export default function SingleMongooseSchemaCreator({ name, fields, shouldAddPaginationAndQuery, exactTermFields, searchTermFields, }: IModule) {

    const [fieldsNumber, setFieldsNumber] = useState<number[]>([1]);
    const dispatch = useDispatch();
    const selectedSearch = useMemo(() => {
        if (searchTermFields) {
            return searchTermFields.map((single) => ({
                value: single,
                label: single,
            }));
        }
        return [];
    }, [searchTermFields]);

    const selectedExact = useMemo(() => {
        if (exactTermFields) {
            return exactTermFields.map((single) => ({
                value: single,
                label: single,
            }));
        }
        return [];
    }, [exactTermFields]);

    const allFieldsAsOptions = useMemo(() => {
        if (fields.length) {
            return fields.map((single) => ({
                value: single.fieldName,
                label: single.fieldName,
            }));
        }
        return [];
    }, [fields]);

    const handleIncreaseFieldsNumber = () => {
        if (fieldsNumber.length >= 30) {
            toast.error("Maximum Fields Reached");
            return;
        }
        setFieldsNumber((pre) => {
            const maxNum = Math.max(...pre);
            console.log(maxNum);

            return [...pre, maxNum + 1];
        });
    };

    const handleDelete = (num: number) => {
        setFieldsNumber((pre) => pre.filter((single) => single !== num));
    };

    const handleSearchChange = (value: SelectValue) => {
        console.log(value, { selectedSearch }, { searchTermFields });
        if (Array.isArray(value)) {
            dispatch(
                addNewSearchTermFields({
                    moduleName: name,
                    fieldName: value.map((single) => single.value),
                })
            );
        } else {
            if (selectedSearch.length) {
                dispatch(
                    addNewSearchTermFields({
                        moduleName: name,
                        fieldName: [],
                    })
                );
            }
        }
    };

    const handleExactChange = (value: SelectValue) => {
        console.log(value, { selectedSearch }, { searchTermFields });
        if (Array.isArray(value)) {
            dispatch(
                addExactField({
                    moduleName: name,
                    fieldName: value.map((single) => single.value),
                })
            );
        } else {
            if (selectedSearch.length) {
                dispatch(
                    addExactField({
                        moduleName: name,
                        fieldName: [],
                    })
                );
            }
        }
    };

    return (
        <div className="mx-2 border border-blue-500 rounded-3xl p-5 mb-4">
            <div className="flex justify-between items-center">
                <h6 className="text-xl capitalize">{name}</h6>

                <button onClick={() => handleIncreaseFieldsNumber()} className=" ml-2 ">
                    <FontAwesomeIcon className="" icon={faPlus} />
                </button>
            </div>
            {Boolean(fields.length) && (
                <div className="mt-5">
                    <h4 className="mb-3">Added Fields</h4>
                    {fields.map((single, i) => (
                        <FieldsInputs
                            num={i}
                            moduleName={name}
                            handleDelete={handleDelete}
                            key={i}
                            isDisabled={true}
                            fieldsInfo={single}
                        />
                    ))}
                </div>
            )}
            <div className="mt-5">
                {Boolean(fields.length) && <h4 className="mb-3">Add New Fields</h4>}
                {fieldsNumber.map((single) => (
                    <FieldsInputs
                        num={single}
                        moduleName={name}
                        handleDelete={handleDelete}
                        key={single}
                    />
                ))}
            </div>
            <div className="mt-5">
                <div className="flex gap-3 items-center">
                    <input
                        type="checkbox"
                        className="w-5 h-5"
                        checked={shouldAddPaginationAndQuery}
                        onChange={(e) =>
                            dispatch(
                                setShouldAddPaginationAndQuery({
                                    value: e.target.checked,
                                    moduleName: name,
                                })
                            )
                        }
                        id=""
                    />
                    <p className="text-xl">Add Pagination And Query</p>
                </div>
                {shouldAddPaginationAndQuery ? (
                    <div
                        className={`grid grid-cols-2 gap-28 pagination-and-query  mt-2 ml-8  transition-all ${shouldAddPaginationAndQuery
                            ? "grayscale-0 opacity-100"
                            : "grayscale opacity-50"
                            }`}
                    >
                        <div>
                            <div className="flex justify-between">
                                <p className="text-lg">Search Term Query Field</p>
                                <button
                                    title="something"
                                    className="p-2 rounded-full border border-white flex justify-center items-center text-sm h-[22px] w-[22px]"
                                >
                                    <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
                                </button>
                            </div>
                            <div className="custom-multi-selection mt-2">
                                <Select
                                    onChange={handleSearchChange}
                                    value={selectedSearch}
                                    options={allFieldsAsOptions}
                                    isMultiple={true}
                                    isDisabled={!shouldAddPaginationAndQuery}
                                    primaryColor="blue"
                                    placeholder="Choose Fields"
                                    classNames={{
                                        menu: "bg-primary",
                                        list: "bg-primary",
                                        tagItemText:
                                            "text-blue-900 font-bold text-lg px-3 rounded-2xl ",
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <p className="text-lg">Exact Match Query Field</p>
                                <button
                                    title="something"
                                    className="p-2 rounded-full border border-white flex justify-center items-center text-sm h-[22px] w-[22px]"
                                >
                                    <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
                                </button>
                            </div>
                            <div className="custom-multi-selection mt-2">
                                <Select
                                    onChange={handleExactChange}
                                    value={selectedExact}
                                    options={allFieldsAsOptions}
                                    isMultiple={true}
                                    primaryColor="blue"
                                    isDisabled={!shouldAddPaginationAndQuery}
                                    placeholder="Choose Fields"
                                    classNames={{
                                        menu: "bg-primary",
                                        list: "bg-primary",
                                        tagItemText:
                                            "text-blue-900 font-bold text-lg px-3 rounded-2xl ",
                                    }}
                                ></Select>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
