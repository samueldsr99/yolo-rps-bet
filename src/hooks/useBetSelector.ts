import { useSelector } from "./redux";

export const useBetSelector = () => useSelector((state) => state.betReducer);
