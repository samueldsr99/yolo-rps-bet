import { createSlice } from "@reduxjs/toolkit";

import gameConfig from "../game.config";
import { GameState } from "../types";

const initialState: GameState = {
  balance: gameConfig.initialBalance,
  wins: 0,
  betAmount: {
    paper: 0,
    rock: 0,
    scissors: 0,
  },
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    betOn: (state) => {
      return state;
    },
  },
});

export const { betOn } = gameSlice.actions;

export default gameSlice.reducer;
