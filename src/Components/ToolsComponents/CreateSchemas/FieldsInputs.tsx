import { IFields } from "@/interface";
import { useAppDispatch, useAppSelector } from "@/redux/app/store";
import {
  addNewField,
  removeField,
} from "@/redux/features/backEndGen/backEndGen";
import { textChecker } from "@/utils/textChecker";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import { Resolver, useForm } from "react-hook-form";

type Props = {
  num: number;
  moduleName: string;
  handleDelete: (num: number) => void;
  isDisabled?: boolean;
  fieldsInfo?: IFields;
};
type FormValues = {
  fieldName: string;
  type: string;
  length: number;
  isRequired?: boolean;
  isUnique?: boolean;
};

const FieldsInputs = ({
  num,
  moduleName,
  handleDelete,
  isDisabled,
  fieldsInfo,
}: Props) => {
  const backendGen = useAppSelector((state) => state.backendGen);
  const allAddedFieldName = useMemo(() => {
    const findIndex = backendGen.findIndex(
      (single) => single.name === moduleName
    );
    if (findIndex > -1) {
      return backendGen[findIndex].fields.map((single) => single.fieldName);
    }
    return [];
  }, [backendGen, moduleName]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit((data) => {
    dispatch(addNewField({ moduleName, ...data }));
    reset();
  });

  const isErrorClass = (fields: keyof FormValues) => {
    return Boolean(errors[fields]) ? "input-error" : "";
  };
  const handleDeleteButtonClick = () => {
    if (!isDisabled && fieldsInfo?.fieldName) {
      handleDelete(num);
    } else {
      console.log("hi", {
        moduleName,
        fieldName: fieldsInfo?.fieldName as string,
      });
      dispatch(
        removeField({ moduleName, fieldName: fieldsInfo?.fieldName as string })
      );
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="fields-input-wrap flex gap-4 items-center text-black">
          {!isDisabled ? (
            <input
              className={isErrorClass("fieldName")}
              placeholder="*Field name"
              defaultValue={fieldsInfo?.fieldName}
              disabled={isDisabled}
              type="text"
              {...register("fieldName", {
                required: "Field name is required",
                validate: (value) =>
                  !allAddedFieldName.includes(value) || "Field already exits",
                pattern: {
                  value: textChecker.camelCase,
                  message:
                    "use camel-case (demo,demoPage) and no special character and number allowed!",
                },
              })}
            />
          ) : (
            <input
              className="w-[140px]  "
              value={fieldsInfo?.fieldName}
              type="text"
            />
          )}
          {!isDisabled ? (
            <select
              className={isErrorClass("type")}
              disabled={isDisabled}
              defaultValue={fieldsInfo?.type || ""}
              {...register("type", { required: "Type is require" })}
            >
              <option value="" disabled>
                *Select Type
              </option>
              <option value="string">String</option>
              <option value="number">Number</option>
              <option value="boolean">Boolean</option>
              <option value="date">Date</option>
            </select>
          ) : (
            <input
              className="w-[140px] capitalize"
              value={fieldsInfo?.type}
              type="text"
            />
          )}
          {!isDisabled ? (
            <input
              className="w-[100px]"
              disabled={isDisabled}
              placeholder="Length"
              type="number"
              {...register("length")}
            />
          ) : (
            fieldsInfo?.length && (
              <input
                className="w-[100px]"
                defaultValue={fieldsInfo?.length}
                disabled={isDisabled}
                placeholder="Length"
                type="number"
                {...register("length")}
              />
            )
          )}
          {/* require box */}
          {!isDisabled ? (
            <div className="input-box">
              <>
                <input
                  type="checkbox"
                  {...register("isRequired")}
                  id={isDisabled ? undefined : `re-${num}`}
                />
                <label htmlFor={isDisabled ? undefined : `re-${num}`}>
                  Is Required
                </label>
              </>
            </div>
          ) : (
            fieldsInfo?.isRequired && (
              <div className="input-box">
                <label className="font-bold !text-sm">Required</label>
              </div>
            )
          )}
          {/* unique */}
          {!isDisabled ? (
            <div className="input-box">
              <input
                disabled={isDisabled}
                type="checkbox"
                {...register("isUnique")}
                id={`un-${num}`}
              />
              <label htmlFor={`un-${num}`}>Is Unique</label>
            </div>
          ) : (
            fieldsInfo?.isUnique && (
              <div className="input-box">
                <label className="font-bold !text-sm">Unique</label>
              </div>
            )
          )}
          <div>
            {!Boolean(isDisabled) && (
              <button type="submit" className=" text-green-400  ml-2 ">
                <FontAwesomeIcon className="" icon={faCheck} />
              </button>
            )}
            <button
              type="button"
              onClick={handleDeleteButtonClick}
              className="  ml-4 "
            >
              <FontAwesomeIcon className="text-white" icon={faClose} />
            </button>
          </div>
        </div>
        <p className="py-2 text-error-primary ">
          {errors.fieldName?.message || errors.type?.message}
        </p>
      </form>
    </div>
  );
};

export default FieldsInputs;
