"use client";

import classNames from "classnames";
import { HTMLAttributes } from "react";
import { CheckIcon } from "../icon";

export interface CheckBoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  label?: string;
  state?: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckBox = ({
  className,
  state = false,
  setState,
  label,
  id,
  ...props
}: CheckBoxProps) => {
  const isPrimary =
    "w-[28px] h-[28px] rounded bg-gray-700 border-[2px] border-solid border-gray-600 flex justify-center items-center";
  const isCheck = state && "bg-primary-300 border-primary-300";
  return (
    <>
      <div
        id={id}
        className={classNames(className, isPrimary, isCheck)}
        onClick={() => {
          if (state === true) setState(false);
          else setState(true);
        }}
        {...props}
      >
        <CheckIcon fill={state === true ? "#FFFFFF" : "#ECECF0"} />
      </div>
      {/* {label ? (
        <label className="" htmlFor={id}>
          {label}
        </label>
      ) : null} */}
    </>
  );
};

export default CheckBox;
