import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

import gameConfig from "../game.config";
import { BetAmountData, BetState, PlayerChoice } from "../types";
import { getBetChoicesFromData } from "../utils";
import gameEngine from "../lib/game-engine";

const initialState: BetState = {
  stage: "pick",
  balance: gameConfig.initialBalance,
  wins: 0,
  game: null,
  amountWon: 0,
  betAmount: {
    paper: 0,
    rock: 0,
    scissors: 0,
  } satisfies BetAmountData,
};

export const betSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    /**
     * Mutate the state to increase the bet amount for a choice
     */
    betOn: (state, action: PayloadAction<PlayerChoice>) => {
      if (state.balance < gameConfig.betIncreaseQuantity) {
        return state;
      }

      const newState = _.cloneDeep(state);
      const quantity = gameConfig.betIncreaseQuantity;
      newState.balance -= quantity;
      switch (action.payload) {
        case "paper":
          newState.betAmount.paper += quantity;
          break;
        case "rock":
          newState.betAmount.rock += quantity;
          break;
        case "scissors":
          newState.betAmount.scissors += quantity;
          break;
        default:
          break;
      }

      const betChoicesAmount = getBetChoicesFromData(newState.betAmount);
      if (betChoicesAmount === 3) {
        return state;
      }

      return newState;
    },

    /**
     * Transition the state to "play" stage and generate
     * a random game play
     */
    play: (state) => {
      const newState = {
        stage: "play",
        game: gameEngine.generateRandomGame(),
        balance: state.balance,
        betAmount: state.betAmount,
        wins: state.wins,
        amountWon: 0,
      } satisfies BetState;

      return newState;
    },

    /**
     * Transition the state from "play" to "results" stage and calculates
     * the result of the game
     */
    getResults: (state) => {
      // if player don't won, it loses all the bet amount
      if (state.game?.winner !== "player") {
        return {
          stage: "results",
          balance: state.balance,
          betAmount: state.betAmount,
          wins: state.wins,
          game: state.game,
          amountWon: 0,
        } satisfies BetState;
      }

      // if player bet on one choice, it gains gameConfig.twoXMultiplier that amount
      // if player bet on two choices, it gains gameConfig.threeXMultiplier that amount
      const betChoicesAmount = getBetChoicesFromData(state.betAmount);
      const amountMultiplier =
        betChoicesAmount === 1
          ? gameConfig.threeXMultiplier
          : gameConfig.twoXMultiplier;
      const amountWon =
        amountMultiplier * state.betAmount[state.game.playerChoice];

      return {
        stage: "results",
        balance: state.balance + amountWon,
        betAmount: state.betAmount,
        wins: state.wins + 1,
        game: state.game,
        amountWon,
      } satisfies BetState;
    },

    /**
     * Transition the state to "pick" stage again
     * and reset the bet amount
     */
    clear: (state) => {
      return {
        stage: "pick",
        balance: state.balance,
        wins: state.wins,
        betAmount: {
          paper: 0,
          rock: 0,
          scissors: 0,
        } satisfies BetAmountData,
        game: null,
        amountWon: 0,
      } satisfies BetState;
    },

    restartGame: () => initialState,
  },
});

export const { betOn, play, getResults, clear, restartGame } = betSlice.actions;

export default betSlice.reducer;
