import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

import gameConfig from "../game.config";
import { BetAmountData, GameState, PlayerChoice } from "../types";
import { getBetChoicesFromData } from "../utils";

const initialState: GameState = {
  balance: gameConfig.initialBalance,
  wins: 0,
  betAmount: {
    paper: 0,
    rock: 0,
    scissors: 0,
  } satisfies BetAmountData,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
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

      // check user is not betting on everything
      const betChoicesAmount = getBetChoicesFromData(newState.betAmount);
      if (betChoicesAmount === 3) {
        return state;
      }

      return newState;
    },
  },
});

export const { betOn } = gameSlice.actions;

export default gameSlice.reducer;
