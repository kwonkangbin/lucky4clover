import classNames from "classnames";
import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "gray" | "white";
type ButtonSize = "small" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
  varient?: ButtonVariant;
  size?: ButtonSize;
}

const Button = ({
  type = "button",
  onClick,
  children,
  className = "",
  varient,
  size,
  ...props
}: ButtonProps) => {
  const isPrimary =
    varient === "primary"
      ? "bg-primary-300 text-white border-[1px] border-solid border-primary-300 hover:bg-primary-400 hover:border-primary-400"
      : "bg-white text-black border-[1px] border-solid border-gray-600 hover:bg-gray-600";
  const buttonBackground =
    varient === "gray"
      ? "bg-gray-500 text-white border-[1px] border-solid border-gray-500 hover:bg-gray-400 hover:border-gray-400"
      : isPrimary;

  const buttonSize =
    size === "large" ? "px-24 py-3 rounded-lg" : "px-6 py-2 rounded-lg";

  return (
    <button
      {...props}
      className={classNames(className, buttonBackground, buttonSize)}
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
