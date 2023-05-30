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
