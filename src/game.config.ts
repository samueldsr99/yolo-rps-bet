interface GameConfig {
  initialBalance: number;
  betIncreaseQuantity: number;
  twoXMultiplier: number;
  threeXMultiplier: number;
}

export default {
  initialBalance: 5000,
  betIncreaseQuantity: 500,
  twoXMultiplier: 3,
  threeXMultiplier: 14,
} satisfies GameConfig;
