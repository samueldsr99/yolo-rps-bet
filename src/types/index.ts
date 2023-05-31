export type PlayerChoice = "paper" | "rock" | "scissors";

export type BetStage = "pick" | "play" | "results";

export type BetState = {
  stage: BetStage;
  balance: number;
  wins: number;
  betAmount: {
    rock: number;
    paper: number;
    scissors: number;
  };
  game: GameState | null;
  amountWon: number;
};

export type Winner = "player" | "computer" | "draw";

export type GameState = {
  playerChoice: PlayerChoice;
  computerChoice: PlayerChoice;
  winner: Winner;
  winnerChoice: PlayerChoice | null;
};

export type BetAmountData = {
  paper: number;
  rock: number;
  scissors: number;
};
