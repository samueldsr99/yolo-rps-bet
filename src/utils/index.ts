import { BetAmountData } from "../types";

export const calculateTotalBetAmount = (betData: BetAmountData) =>
  betData.paper + betData.rock + betData.scissors;

export const getBetChoicesFromData = (betData: BetAmountData): number =>
  [betData.paper > 0, betData.rock > 0, betData.scissors > 0].filter(Boolean)
    .length;
