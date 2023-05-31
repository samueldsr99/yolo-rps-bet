import { FC } from "react";
import clsx from "classnames/bind";
import { useBetSelector } from "../hooks/useBetSelector";

export type ContentProps = {
  match?: string;
};

const classes = clsx.bind({
  "choice-label": "text-4xl sm:text-6xl text-white font-semibold",
  "vs-label": "text-3xl sm:text-5xl font-semibold text-orange-300",
});

const Content: FC<ContentProps> = () => {
  const bet = useBetSelector();

  if (bet.stage === "pick") {
    return <div></div>;
  } else if (bet.stage === "play") {
    return (
      <div className="w-full inline-flex justify-center items-end gap-8 sm:gap-16 text-center my-12">
        <h2 className={classes("choice-label")}>
          {bet.game?.playerChoice.toUpperCase()}
        </h2>
        <span className={classes("vs-label")}>vs</span>
        <h2 className={classes("choice-label")}>
          {bet.game?.computerChoice.toUpperCase()}
        </h2>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-center text-4xl sm:text-6xl text-green-500 font-semibold">
          {bet.game?.winnerChoice === null
            ? "TIE"
            : `${bet.game?.winnerChoice.toUpperCase()} WON`}
        </h1>
        {bet.game?.winner === "player" && bet.amountWon > 0 && (
          <h2 className="mt-3 text-center text-2xl sm:text-3xl text-orange-300 font-semibold">
            YOU WIN <span className="text-white">{bet.amountWon}</span>
          </h2>
        )}
      </div>
    );
  }
};

export default Content;
