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
    "w-[24px] h-[24px] rounded-[3.789px] border-[1.263px] border-black-3 flex justify-center items-center";
  const isCheck = state && "bg-green-1 border-green-1";
  return (
    <div className="flex justify-center items-center gap-[7px]">
      <div
        id={id}
        className={classNames(className, isPrimary, isCheck)}
        onClick={() => {
          if (state === true) setState(false);
          else setState(true);
        }}
        {...props}
      >
        <CheckIcon fill={state === true ? "#FFFFFF" : "#767676"} />
      </div>
      <p className="text-black-3 font-checkbox-1">익명으로 보내기</p>
    </div>
  );
};

export default CheckBox;
