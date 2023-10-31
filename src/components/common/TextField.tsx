import classNames from "classnames";
import { TextareaHTMLAttributes, ChangeEventHandler } from "react";

export interface TextFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

const TextField = ({ className = "", ...props }: TextFieldProps) => {
  return (
    <textarea
      {...props}
      className={classNames(
        "w-[342px] h-[321px] font-button-1 text-black-1 border-[1px] rounded-[10px] border-green-1 p-[12px] resize-none outline-0",
        "placeholder:text-black-6",
        className,
      )}
      placeholder="응원글을 작성해주세요."
    />
  );
};

export default TextField;
