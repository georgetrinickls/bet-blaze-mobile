
export interface Mission {
  id: number;
  title: string;
  xpReward: number;
  progress: number;
  total: number;
  type: string;
  completed?: boolean;
}

export interface Reward {
  id: number;
  title: string;
  unlocked: boolean;
  claimed?: boolean;
  nextLevel?: boolean;
  rewardType: string; // e.g. "Free Bet", "Odds Boost", "Voucher"
  eligibility?: string; // e.g. "Level 4 required"
  description?: string;
}

export interface LevelTrackerProps {
  userLevel: number;
  userLevelName: string;
  levelNames: string[];
  currentXP: number;
  nextLevelXP: number;
  xpToNextLevel: number;
  xpProgress: number;
}

export interface MissionsSectionProps {
  missions: Mission[];
}

export interface RewardsSectionProps {
  rewards: Reward[];
}

export interface RewardsCarouselProps {
  rewards: Reward[];
}

export type RewardFilterType = 'unlocked' | 'coming' | 'all';
