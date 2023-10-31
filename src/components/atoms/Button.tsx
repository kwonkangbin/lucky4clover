import classNames from "classnames";
import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "instargram" | "white";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
  varient?: ButtonVariant;
}

const Button = ({
  onClick,
  children,
  className = "",
  varient = "primary",
  ...props
}: ButtonProps) => {
  const isPrimary =
    // eslint-disable-next-line no-nested-ternary
    varient === "primary"
      ? "w-[342px] h-[57px] rounded-[37px] font-button-1 bg-green-1 text-white"
      : varient === "white"
      ? "w-[342px] h-[57px] rounded-[37px] font-button-1 bg-white border border-green-1 text-green-1"
      : "w-[206px] h-[48px] rounded-[37px] bg-green-2 text-white font-button-2";

  return (
    <button
      {...props}
      className={classNames(className, isPrimary)}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
