export type PlayerChoice = "paper" | "rock" | "scissors";

export type GameState = {
  balance: number;
  wins: number;
  betAmount: {
    rock: number;
    paper: number;
    scissors: number;
  };
};

export type BetAmountData = {
  paper: number;
  rock: number;
  scissors: number;
};
