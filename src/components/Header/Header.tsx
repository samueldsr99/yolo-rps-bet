import { FC } from "react";

const Header: FC = () => {
  const items = [
    {
      label: "balance",
      value: "XXXX",
    },
    {
      label: "bet",
      value: "XXXX",
    },
    {
      label: "win",
      value: "X",
    },
  ];

  return (
    <header className="w-full bg-slate-900 flex justify-center gap-20">
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
