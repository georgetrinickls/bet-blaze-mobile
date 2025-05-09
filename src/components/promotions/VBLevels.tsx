
import React from "react";
import { Button } from "@/components/ui/button";
import { LevelTracker } from "./LevelTracker";
import { MissionsSection } from "./MissionsSection";
import { RewardsSection } from "./RewardsSection";

export const VBLevels = () => {
  // Mock data for the VB Levels component
  const userLevel = 3;
  const userLevelName = "Expert";
  const totalLevels = 5;
  const levelNames = ["Rookie", "Pro", "Expert", "Elite", "Legend"];
  const currentXP = 650;
  const nextLevelXP = 1000;
  const xpToNextLevel = nextLevelXP - currentXP;
  const xpProgress = (currentXP / nextLevelXP) * 100;

  // Mock missions data
  const missions = [
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

  // Mock rewards data
  const rewards = [
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

  return (
    <div className="bg-gray-900 text-white rounded-xl">
      {/* Header Section */}
      <div className="bg-virginRedNew rounded-t-xl p-5">
        <h2 className="text-2xl font-bold mb-2">VB Levels</h2>
        <p className="text-white/80">Complete missions. Earn XP. Get rewards.</p>
      </div>

      {/* Level Progress Section */}
      <LevelTracker 
        userLevel={userLevel}
        userLevelName={userLevelName}
        levelNames={levelNames}
        currentXP={currentXP}
        nextLevelXP={nextLevelXP}
        xpToNextLevel={xpToNextLevel}
        xpProgress={xpProgress}
      />

      {/* Current Missions Section */}
      <MissionsSection missions={missions} />

      {/* Rewards Section */}
      <RewardsSection rewards={rewards} />

      {/* Call to Action */}
      <div className="p-5 bg-virginRedNew/20 rounded-b-xl">
        <Button className="w-full bg-white text-virginRedNew hover:bg-gray-100">
          View Your Level History
        </Button>
      </div>
    </div>
  );
};
