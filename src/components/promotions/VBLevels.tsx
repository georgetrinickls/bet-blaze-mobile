
import React from "react";
import { Button } from "@/components/ui/button";
import { LevelTracker } from "./LevelTracker";
import { MissionsSection } from "./MissionsSection";
import { RewardsSection } from "./RewardsSection";
import {
  USER_LEVEL,
  USER_LEVEL_NAME,
  LEVEL_NAMES,
  CURRENT_XP,
  NEXT_LEVEL_XP,
  XP_TO_NEXT_LEVEL,
  XP_PROGRESS,
  MISSIONS,
  REWARDS
} from "./constants";

export const VBLevels = () => {
  return (
    <div className="bg-gray-900 text-white rounded-xl">
      {/* Header Section */}
      <div className="bg-virginRedNew rounded-t-xl p-5">
        <h2 className="text-2xl font-bold mb-2">VB Levels</h2>
        <p className="text-white/80">Complete missions. Earn XP. Get rewards.</p>
      </div>

      {/* Level Progress Section */}
      <LevelTracker 
        userLevel={USER_LEVEL}
        userLevelName={USER_LEVEL_NAME}
        levelNames={LEVEL_NAMES}
        currentXP={CURRENT_XP}
        nextLevelXP={NEXT_LEVEL_XP}
        xpToNextLevel={XP_TO_NEXT_LEVEL}
        xpProgress={XP_PROGRESS}
      />

      {/* Current Missions Section */}
      <MissionsSection missions={MISSIONS} />

      {/* Rewards Section */}
      <RewardsSection rewards={REWARDS} />

      {/* Call to Action */}
      <div className="p-5 bg-virginRedNew/20 rounded-b-xl">
        <Button className="w-full bg-white text-virginRedNew hover:bg-gray-100">
          View Your Level History
        </Button>
      </div>
    </div>
  );
};
