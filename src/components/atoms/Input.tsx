import classNames from "classnames";
import { InputHTMLAttributes, useState } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className = "", ...props }: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleInputFocus = () => {
    setIsFocus((prev) => !prev);
  };

  return (
    <input
      {...props}
      onFocus={handleInputFocus}
      onBlur={handleInputFocus}
      className={classNames(
        " w-[342px] h-[43px] font-button-1 text-black-1 border-b-[2px] border-black-6 outline-0 pl-[4px]",
        " placeholder:text-black-6 transition-colors duration-300",
        isFocus && "border-b-[2px] border-green-1",
        className,
      )}
    />
  );
};

export default Input;
