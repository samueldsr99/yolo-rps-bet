import { useSelector } from "./redux";

export const useGameSelector = () => useSelector((state) => state.gameReducer);
