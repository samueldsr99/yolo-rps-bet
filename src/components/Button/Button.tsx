import { FC } from "react";
import clsx from "classnames";

export type ButtonProps = JSX.IntrinsicElements["button"];

const Button: FC<ButtonProps> = ({
  className,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "px-2 py-4 rounded-full min-w-[160px]",
        "text-2xl font-semibold uppercase",
        "bg-black text-orange-300 border border-orange-300",
        "transition-colors duration-200",
        disabled
          ? "opacity-20"
          : " hover:bg-gray-900 hover:border-orange-100 active:bg-gray-800",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
