
import React, { useState } from "react";
import { RewardsCarouselProps, RewardFilterType, Reward } from "./types";
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check, Clock, Ticket, Gift, Percent, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export const RewardsCarousel = ({ rewards }: RewardsCarouselProps) => {
  const [filter, setFilter] = useState<RewardFilterType>("all");

  // Filter rewards based on selected filter
  const filteredRewards = rewards.filter((reward) => {
    if (filter === "unlocked") return reward.unlocked;
    if (filter === "coming") return !reward.unlocked;
    return true; // "all" filter
  });

  // Get appropriate icon based on reward type
  const getRewardIcon = (rewardType: string) => {
    switch (rewardType.toLowerCase()) {
      case "free bet":
        return <Gift className="h-5 w-5" />;
      case "odds boost":
        return <Percent className="h-5 w-5" />;
      case "voucher":
        return <Ticket className="h-5 w-5" />;
      case "vip access":
      case "bonus":
        return <Award className="h-5 w-5" />;
      default:
        return <Gift className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Rewards Collection</h3>
        
        <ToggleGroup type="single" value={filter} onValueChange={(value) => value && setFilter(value as RewardFilterType)}>
          <ToggleGroupItem value="unlocked" aria-label="Show unlocked rewards">
            Unlocked
          </ToggleGroupItem>
          <ToggleGroupItem value="coming" aria-label="Show coming rewards">
            Coming Up
          </ToggleGroupItem>
          <ToggleGroupItem value="all" aria-label="Show all rewards">
            All
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {filteredRewards.length > 0 ? (
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {filteredRewards.map((reward) => (
              <CarouselItem key={reward.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className={cn(
                  "overflow-hidden border",
                  reward.unlocked 
                    ? "bg-gray-800 border-gray-700" 
                    : "bg-gray-800/50 border-gray-800 opacity-80"
                )}>
                  <CardContent className="p-0">
                    <div className="p-4 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant={reward.unlocked ? "default" : "outline"} className="bg-purple-500 mb-2">
                          {reward.rewardType}
                        </Badge>
                        {reward.nextLevel && (
                          <Badge variant="outline" className="text-xs">
                            {reward.eligibility}
                          </Badge>
                        )}
                      </div>

                      <div className="mb-2 flex gap-2 items-center">
                        <div className="p-2 rounded-full bg-gray-700/50">
                          {getRewardIcon(reward.rewardType)}
                        </div>
                        <h4 className="font-semibold text-lg">{reward.title}</h4>
                      </div>

                      {reward.description && (
                        <p className="text-sm text-gray-400 mb-4">{reward.description}</p>
                      )}

                      <div className="mt-auto">
                        {reward.unlocked && !reward.claimed && (
                          <Button className="w-full bg-purple-500 hover:bg-purple-700 gap-2">
                            <Check className="h-4 w-4" /> Claim Reward
                          </Button>
                        )}
                        {reward.unlocked && reward.claimed && (
                          <Badge className="bg-green-600 w-full justify-center py-2">
                            <Check className="h-4 w-4 mr-1" /> Claimed
                          </Badge>
                        )}
                        {!reward.unlocked && (
                          <Button disabled variant="outline" className="w-full gap-2">
                            <Clock className="h-4 w-4" /> Coming Soon
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-end space-x-2 py-2">
            <CarouselPrevious className="static transform-none bg-gray-800 hover:bg-gray-700" />
            <CarouselNext className="static transform-none bg-gray-800 hover:bg-gray-700" />
          </div>
        </Carousel>
      ) : (
        <div className="text-center py-8 bg-gray-800/30 rounded-lg">
          <p className="text-gray-400">No rewards found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};
