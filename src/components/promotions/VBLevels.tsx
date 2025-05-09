
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronRight, Gift, Zap, Trophy, Clock } from "lucide-react";

export const VBLevels = () => {
  // Mock data for the VB Levels component
  const userLevel = 3;
  const totalLevels = 5;
  const currentXP = 650;
  const nextLevelXP = 1000;
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
      <div className="p-5 border-b border-gray-800">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold">Level {userLevel}</span>
          <span className="text-xs text-white/70">
            {currentXP} / {nextLevelXP} XP
          </span>
        </div>
        <Progress value={xpProgress} className="h-2 bg-gray-700" />
        <div className="flex justify-between mt-2">
          <span className="text-xs text-white/70">Current Level</span>
          <span className="text-xs text-white/70">Level {userLevel + 1}</span>
        </div>
        
        {/* Level Indicator */}
        <div className="flex justify-between mt-4">
          {Array.from({ length: totalLevels }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center 
                ${index + 1 <= userLevel ? 'bg-virginRedNew' : 'bg-gray-700'}`}
              >
                {index + 1}
              </div>
              {index < totalLevels - 1 && (
                <div className={`w-full h-1 mt-4 
                ${index + 1 < userLevel ? 'bg-virginRedNew' : 'bg-gray-700'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Current Missions Section */}
      <div className="p-5 border-b border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Zap className="h-5 w-5 mr-2 text-virginRedNew" />
            Current Missions
          </h3>
          <Button variant="link" className="text-white p-0 flex items-center">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="space-y-4">
          {missions.map((mission) => (
            <div 
              key={mission.id} 
              className={`p-4 rounded-lg ${mission.completed ? 'bg-green-900/20' : 'bg-gray-800'}`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{mission.title}</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-virginRedNew px-2 py-0.5 rounded-full">
                      +{mission.xpReward} XP
                    </span>
                    <span className="text-xs text-white/60 ml-2 capitalize">
                      {mission.type}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  {mission.completed ? (
                    <span className="text-green-400 text-sm">Completed</span>
                  ) : (
                    <span className="text-sm">
                      {mission.progress}/{mission.total}
                    </span>
                  )}
                </div>
              </div>
              {!mission.completed && (
                <div className="mt-2">
                  <Progress 
                    value={(mission.progress / mission.total) * 100} 
                    className="h-1.5 bg-gray-700" 
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Rewards Section */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Gift className="h-5 w-5 mr-2 text-virginRedNew" />
            Your Rewards
          </h3>
          <Button variant="link" className="text-white p-0 flex items-center">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="space-y-4">
          {rewards.map((reward) => (
            <div 
              key={reward.id} 
              className={`p-4 rounded-lg flex justify-between items-center
              ${reward.unlocked ? 'bg-gray-800' : 'bg-gray-800/40'}`}
            >
              <div className="flex items-center">
                {reward.unlocked ? (
                  <Trophy className="h-5 w-5 mr-3 text-virginRedNew" />
                ) : (
                  <Clock className="h-5 w-5 mr-3 text-gray-500" />
                )}
                <div>
                  <h4 className={`font-semibold ${!reward.unlocked && 'text-gray-400'}`}>
                    {reward.title}
                  </h4>
                  {reward.nextLevel && (
                    <span className="text-xs text-gray-400">Unlock at Level 4</span>
                  )}
                </div>
              </div>
              {reward.unlocked && !reward.claimed && (
                <Button className="bg-virginRedNew hover:bg-red-700 text-white">
                  Claim
                </Button>
              )}
              {reward.unlocked && reward.claimed && (
                <span className="text-sm text-green-400">Claimed</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="p-5 bg-virginRedNew/20 rounded-b-xl">
        <Button className="w-full bg-white text-virginRedNew hover:bg-gray-100">
          View Your Level History
        </Button>
      </div>
    </div>
  );
};
