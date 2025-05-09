
import { Mission, Reward } from "./types";

// Level data
export const USER_LEVEL = 3;
export const USER_LEVEL_NAME = "Expert";
export const TOTAL_LEVELS = 5;
export const LEVEL_NAMES = ["Rookie", "Pro", "Expert", "Elite", "Legend"];
export const CURRENT_XP = 650;
export const NEXT_LEVEL_XP = 1000;
export const XP_TO_NEXT_LEVEL = NEXT_LEVEL_XP - CURRENT_XP;
export const XP_PROGRESS = (CURRENT_XP / NEXT_LEVEL_XP) * 100;

// Missions data
export const MISSIONS: Mission[] = [
  {
    id: 1,
    title: "Place 5 bets",
    xpReward: 100,
    progress: 3,
    total: 5,
    type: "daily",
  },
  {
    id: 2,
    title: "Bet on an accumulator",
    xpReward: 200,
    progress: 1,
    total: 1,
    type: "daily",
    completed: true,
  },
  {
    id: 3,
    title: "Deposit £20",
    xpReward: 150,
    progress: 0,
    total: 1,
    type: "weekly",
  },
];

// Rewards data
export const REWARDS: Reward[] = [
  {
    id: 1,
    title: "£5 Free Bet",
    unlocked: true,
    claimed: true,
  },
  {
    id: 2,
    title: "50% Deposit Bonus",
    unlocked: true,
    claimed: false,
  },
  {
    id: 3,
    title: "VIP Casino Access",
    unlocked: false,
    nextLevel: true,
  },
];
