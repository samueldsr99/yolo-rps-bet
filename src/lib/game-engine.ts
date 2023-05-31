import { GameState, PlayerChoice } from "../types";

export class GameEngine {
  /**
   * Calculates the winner of a game
   * @returns -1 if first player wins, 1 if second player wins, 0 if draw
   */
  winner(firstChoice: PlayerChoice, secondChoice: PlayerChoice): -1 | 0 | 1 {
    if (firstChoice === secondChoice) {
      return 0;
    }
    const looseMap: Record<PlayerChoice, PlayerChoice> = {
      paper: "scissors",
      rock: "paper",
      scissors: "rock",
    };
    return looseMap[firstChoice] === secondChoice ? 1 : -1;
  }

  /**
   * Generates a random choice
   * @returns random choice
   */
  private generateRandomChoice(): PlayerChoice {
    const choices: PlayerChoice[] = ["paper", "rock", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  /**
   * Generates a random game
   * @returns random game
   */
  generateRandomGame(): GameState {
    const playerChoice = this.generateRandomChoice();
    const computerChoice = this.generateRandomChoice();
    const winnerNumber = this.winner(playerChoice, computerChoice);

    return {
      playerChoice,
      computerChoice,
      winner:
        winnerNumber === 0
          ? "draw"
          : winnerNumber === -1
          ? "player"
          : "computer",
      winnerChoice:
        winnerNumber === 0
          ? null
          : winnerNumber === -1
          ? playerChoice
          : computerChoice,
    };
  }
}

const gameEngine = new GameEngine();

export default gameEngine;
