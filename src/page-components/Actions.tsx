import { FC, useCallback } from "react";
import clsx from "classnames";

import Button from "../components/Button";
import ChoiceCard from "../components/ChoiceCard";
import { useDispatch } from "../hooks/redux";
import { betOn, clear, play, restartGame } from "../redux/bet-slice";
import { useBetSelector } from "../hooks/useBetSelector";
import { getBetChoicesFromData } from "../utils";

const Actions: FC = () => {
  const bet = useBetSelector();
  const betChoicesAmount = getBetChoicesFromData(bet.betAmount);
  const dispatch = useDispatch();

  const handleClear = useCallback(() => {
    if (bet.balance === 0) {
      alert("You have no more balance to play. Restarting the game...");
      dispatch(restartGame());
    } else {
      dispatch(clear());
    }
  }, [dispatch, bet.balance]);

  return (
    <div className="flex flex-col items-center">
      <span
        className={clsx(
          "text-md font-semibold text-orange-300 uppercase",
          bet.stage === "pick" ? "block" : "hidden"
        )}
      >
        Pick your positions
      </span>
      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <ChoiceCard
          variant="rock"
          disabled={bet.stage !== "pick"}
          amount={bet.betAmount.rock}
          onClick={() => dispatch(betOn("rock"))}
        />
        <ChoiceCard
          variant="paper"
          disabled={bet.stage !== "pick"}
          amount={bet.betAmount.paper}
          onClick={() => dispatch(betOn("paper"))}
        />
        <ChoiceCard
          variant="scissors"
          disabled={bet.stage !== "pick"}
          amount={bet.betAmount.scissors}
          onClick={() => dispatch(betOn("scissors"))}
        />
      </div>

      <div className="mt-16">
        {bet.stage === "results" ? (
          <Button className="mt-16" onClick={handleClear}>
            Clear
          </Button>
        ) : (
          <Button
            className="mt-16"
            disabled={bet.stage === "play" || betChoicesAmount === 0}
            onClick={() => dispatch(play())}
          >
            Play
          </Button>
        )}
      </div>
    </div>
  );
};

export default Actions;
