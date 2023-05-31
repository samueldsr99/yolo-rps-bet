import { FC } from "react";

import { useBetSelector } from "../../hooks/useBetSelector";
import { calculateTotalBetAmount } from "../../utils";

const Header: FC = () => {
  const { balance, wins, betAmount } = useBetSelector();

  const items = [
    {
      label: "balance",
      value: balance,
    },
    {
      label: "bet",
      value: calculateTotalBetAmount(betAmount),
    },
    {
      label: "win",
      value: wins,
    },
  ];

  return (
    <header className="w-full bg-slate-900 flex justify-center gap-20 py-1.5">
      {items.map((item) => (
        <div key={item.label}>
          <span className="text-orange-300 uppercase font-medium">
            {item.label}:
          </span>
          <span className="ml-1 text-white uppercase font-medium">
            {item.value}
          </span>
        </div>
      ))}
    </header>
  );
};

export default Header;
