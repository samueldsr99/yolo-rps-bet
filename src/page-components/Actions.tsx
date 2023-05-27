import { FC } from "react";
import Button from "../components/Button";
import ChoiceCard from "../components/ChoiceCard";

const Actions: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-md font-semibold text-orange-300 uppercase">
        Pick your positions
      </span>
      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <ChoiceCard variant="rock" amount={500} />
        <ChoiceCard variant="paper" amount={1500} />
        <ChoiceCard variant="scissors" />
      </div>
      <Button className="mt-16">Play</Button>
    </div>
  );
};

export default Actions;
