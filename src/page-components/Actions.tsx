import { FC } from "react";

import Button from "../components/Button";
import ChoiceCard from "../components/ChoiceCard";
import { useDispatch } from "../hooks/redux";
import { betOn } from "../redux/game-slice";
import { useGameSelector } from "../hooks/useGameSelector";

const Actions: FC = () => {
  const game = useGameSelector();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <span className="text-md font-semibold text-orange-300 uppercase">
        Pick your positions
      </span>
      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <ChoiceCard
          variant="rock"
          amount={game.betAmount.rock}
          onClick={() => dispatch(betOn("rock"))}
        />
        <ChoiceCard
          variant="paper"
          amount={game.betAmount.paper}
          onClick={() => dispatch(betOn("paper"))}
        />
        <ChoiceCard
          variant="scissors"
          amount={game.betAmount.scissors}
          onClick={() => dispatch(betOn("scissors"))}
        />
      </div>
      <Button className="mt-16">Play</Button>
    </div>
  );
};

export default Actions;
