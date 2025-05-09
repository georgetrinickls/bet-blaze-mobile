
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Gift } from "lucide-react";
import { RewardsSectionProps } from "./types";
import { RewardsCarousel } from "./RewardsCarousel";

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
      
      <RewardsCarousel rewards={rewards} />
    </div>
  );
};
