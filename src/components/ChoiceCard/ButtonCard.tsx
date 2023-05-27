import { FC } from "react";
import clsx from "classnames/bind";

import { PlayerChoice } from "../../types";

export type ChoiceCardProps = JSX.IntrinsicElements["button"] & {
  variant: PlayerChoice;
  amount?: number;
  isActive?: boolean;
};

const classes = clsx.bind({
  root: "px-3 py-6 min-w-[180px] border-2 rounded-md flex flex-col justify-between items-center gap-4",
  rock: "bg-blue-900 text-blue-400 border-blue-800 ring-blue-400",
  paper: "bg-green-900 text-green-400 border-green-800 ring-green-400",
  scissors: "bg-red-900 text-red-400 border-red-800 ring-red-400",
  "amount-container": "w-9 h-9",
  amount:
    "w-full h-full border border-blue-500 rounded-full ring ring-blue-500 bg-white overflow-hidden flex justify-center items-center",
  "amount-label": "text-xs text-black font-semibold",
  active: "ring-4",
});

const ChoiceCard: FC<ChoiceCardProps> = ({
  variant,
  amount,
  isActive,
  ...props
}) => {
  return (
    <button
      className={classes("root", variant, isActive && "active")}
      {...props}
    >
      <div className={classes("amount-container")}>
        {!!amount && amount > 0 && (
          <div className={classes("amount")}>
            <span className={classes("amount-label")}>{amount}</span>
          </div>
        )}
      </div>
      <h1 className={classes("text-2xl font-medium uppercase")}>{variant}</h1>
    </button>
  );
};

export default ChoiceCard;
