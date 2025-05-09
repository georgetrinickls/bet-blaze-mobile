
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Gift, Trophy, Clock } from "lucide-react";

interface Reward {
  id: number;
  title: string;
  unlocked: boolean;
  claimed?: boolean;
  nextLevel?: boolean;
}

interface RewardsSectionProps {
  rewards: Reward[];
}

export const RewardsSection = ({ rewards }: RewardsSectionProps) => {
  return (
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
  );
};
