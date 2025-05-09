
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Gift, Info } from "lucide-react";
import { RewardsSectionProps } from "./types";
import { RewardsCarousel } from "./RewardsCarousel";
import { RewardModal } from "./RewardModal";
import { useIsMobile } from "@/hooks/use-mobile";

export const RewardsSection = ({ rewards }: RewardsSectionProps) => {
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [currentMilestone, setCurrentMilestone] = useState(false);
  const isMobile = useIsMobile();
  
  // This would normally be triggered by an actual milestone completion
  // For demo purposes, we're adding a button to trigger it
  const sampleReward = {
    title: "Mystery Odds Boost",
    rewardType: "Odds Boost",
    description: "Get a 50% boost on any sport of your choice! Valid for 24 hours."
  };
  
  const handleTestMilestone = () => {
    setCurrentMilestone(true);
    setShowRewardModal(true);
  };

  return (
    <div className="p-4 sm:p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base sm:text-lg font-semibold flex items-center">
          <Gift className="h-5 w-5 mr-2 text-purple-500" />
          Your Rewards
        </h3>
        <Button 
          variant="link" 
          className="text-white p-0 flex items-center" 
          size={isMobile ? "sm" : "default"}
        >
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <RewardsCarousel rewards={rewards} />
      
      {/* For demo purposes - in production this button would be removed */}
      <div className="mt-4 border-t border-gray-800 pt-2">
        <Button 
          onClick={handleTestMilestone}
          variant="outline" 
          size="sm"
          className="text-xs text-gray-400 hover:text-white border-gray-700 h-10 w-full sm:w-auto"
        >
          Demo: Complete Milestone
        </Button>
      </div>
      
      {/* Reward Modal */}
      <RewardModal
        isOpen={showRewardModal}
        onOpenChange={setShowRewardModal}
        reward={sampleReward}
        reason="Completed 5 consecutive days of betting"
      />
    </div>
  );
};
