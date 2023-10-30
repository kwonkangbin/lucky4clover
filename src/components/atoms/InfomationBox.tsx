import classNames from "classnames";
import { HTMLAttributes } from "react";
import { InfomationIcon } from "../icon";

export interface InfomationBoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  content: string;
}

const InfomationBox = ({
  className,
  content,
  ...props
}: InfomationBoxProps) => {
  return (
    <div
      {...props}
      className={classNames(
        " flex items-center w-full justify-center p-3 gap-2 rounded-lg border-[1px] border-solid border-gray-600",
        className,
      )}
    >
      <InfomationIcon />
      <span className=" font-body-1 mr-auto">{content}</span>
    </div>
  );
};

export default InfomationBox;
