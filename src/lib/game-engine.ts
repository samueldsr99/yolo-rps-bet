import { PlayerChoice } from "../types";

export class GameEngine {
  /**
   * Calculates the winner of a game
   * @param firstChoice first player choice
   * @param secondChoice second player choice
   * @returns -1 if first player wins, 1 if second player wins, 0 if draw
   */
  winner(firstChoice: PlayerChoice, secondChoice: PlayerChoice): -1 | 0 | 1 {
    if (firstChoice === secondChoice) {
      return 0;
    }

    if (
      (firstChoice === "rock" && secondChoice === "scissors") ||
      (firstChoice === "scissors" && secondChoice === "paper") ||
      (firstChoice === "paper" && secondChoice === "rock")
    ) {
      return -1;
    }

    return 1;
  }
}
