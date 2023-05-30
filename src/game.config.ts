interface GameConfig {
  initialBalance: number;
  twoXMultiplier: number;
  threeXMultiplier: number;
}

export default {
  initialBalance: 5000,
  twoXMultiplier: 3,
  threeXMultiplier: 14,
} satisfies GameConfig;
