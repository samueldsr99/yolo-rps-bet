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
};

export type Winner = "player" | "computer" | "draw";

export type GameState = {
  playerChoice: PlayerChoice;
  computerChoice: PlayerChoice;
  winner: Winner;
};

export type BetAmountData = {
  paper: number;
  rock: number;
  scissors: number;
};
