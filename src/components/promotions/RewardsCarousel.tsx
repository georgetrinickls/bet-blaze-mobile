
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RewardsCarouselProps, RewardFilterType } from "./types";
import { Gift, Lock } from "lucide-react";

export const RewardsCarousel = ({ rewards }: RewardsCarouselProps) => {
  const [filter, setFilter] = useState<RewardFilterType>("unlocked");

  const filteredRewards = rewards.filter((reward) => {
    if (filter === "unlocked") return reward.unlocked;
    if (filter === "coming") return !reward.unlocked;
    return true; // "all" filter
  });

  return (
    <div className="space-y-4">
      <Tabs defaultValue="unlocked" className="w-full" onValueChange={(value) => setFilter(value as RewardFilterType)}>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="unlocked">Unlocked</TabsTrigger>
          <TabsTrigger value="coming">Coming Soon</TabsTrigger>
          <TabsTrigger value="all">All</TabsTrigger>
        </TabsList>

        <TabsContent value="unlocked" className="space-y-0 mt-0">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide snap-x">
            {filteredRewards.length > 0 ? (
              filteredRewards.map((reward) => (
                <Card 
                  key={reward.id} 
                  className={`flex-shrink-0 w-36 sm:w-40 border ${
                    reward.claimed ? "border-gray-700" : "border-purple-500"
                  } bg-gray-800 rounded-lg snap-start overflow-hidden`}
                >
                  <CardContent className="p-3">
                    <div className="flex justify-center items-center h-14 mb-2">
                      <Gift className="h-8 w-8 text-purple-500" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-sm mb-1">{reward.title}</p>
                      <p className="text-xs text-gray-400 mb-3">{reward.rewardType}</p>
                      {reward.claimed ? (
                        <span className="text-xs text-gray-400">Claimed</span>
                      ) : (
                        <Button size="sm" className="w-full text-xs bg-purple-500 hover:bg-purple-600">
                          Claim
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center w-full text-sm text-gray-400 py-8">No rewards available</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="coming" className="space-y-0 mt-0">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide snap-x">
            {filteredRewards.length > 0 ? (
              filteredRewards.map((reward) => (
                <Card 
                  key={reward.id} 
                  className="flex-shrink-0 w-36 sm:w-40 border border-gray-700 bg-gray-800 rounded-lg snap-start overflow-hidden opacity-70"
                >
                  <CardContent className="p-3">
                    <div className="flex justify-center items-center h-14 mb-2">
                      <Lock className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-sm mb-1">{reward.title}</p>
                      <p className="text-xs text-gray-400 mb-3">{reward.rewardType}</p>
                      <p className="text-xs text-gray-400">{reward.eligibility}</p>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center w-full text-sm text-gray-400 py-8">No upcoming rewards</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="all" className="space-y-0 mt-0">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide snap-x">
            {rewards.length > 0 ? (
              rewards.map((reward) => (
                <Card 
                  key={reward.id} 
                  className={`flex-shrink-0 w-36 sm:w-40 border ${
                    !reward.unlocked ? "border-gray-700" : reward.claimed ? "border-gray-700" : "border-purple-500"
                  } bg-gray-800 rounded-lg snap-start overflow-hidden ${!reward.unlocked ? "opacity-70" : ""}`}
                >
                  <CardContent className="p-3">
                    <div className="flex justify-center items-center h-14 mb-2">
                      {reward.unlocked ? (
                        <Gift className="h-8 w-8 text-purple-500" />
                      ) : (
                        <Lock className="h-8 w-8 text-gray-400" />
                      )}
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-sm mb-1">{reward.title}</p>
                      <p className="text-xs text-gray-400 mb-3">{reward.rewardType}</p>
                      {reward.unlocked ? (
                        reward.claimed ? (
                          <span className="text-xs text-gray-400">Claimed</span>
                        ) : (
                          <Button size="sm" className="w-full text-xs bg-purple-500 hover:bg-purple-600">
                            Claim
                          </Button>
                        )
                      ) : (
                        <p className="text-xs text-gray-400">{reward.eligibility}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center w-full text-sm text-gray-400 py-8">No rewards available</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
