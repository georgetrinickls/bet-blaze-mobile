
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";
import { MissionsSectionProps } from "./types";
import { useIsMobile } from "@/hooks/use-mobile";

export const MissionsSection = ({ missions }: MissionsSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="p-5 border-b border-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <Zap className="h-5 w-5 mr-2 text-virginRedNew" />
          Current Missions
        </h3>
        <Button 
          variant="link" 
          className="text-white p-0 flex items-center"
          size={isMobile ? "sm" : "default"}
        >
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <div className="space-y-4">
        {missions.map((mission) => (
          <div 
            key={mission.id} 
            className={`p-4 rounded-lg ${mission.completed ? 'bg-green-900/20' : 'bg-gray-800'} 
              touch-manipulation active:bg-opacity-80 transition-colors`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm sm:text-base truncate pr-2">{mission.title}</h4>
                <div className="flex items-center flex-wrap mt-1 gap-2">
                  <span className="text-xs bg-virginRedNew px-2 py-0.5 rounded-full whitespace-nowrap">
                    +{mission.xpReward} XP
                  </span>
                  <span className="text-xs text-white/60 capitalize whitespace-nowrap">
                    {mission.type}
                  </span>
                </div>
              </div>
              <div className="text-right min-w-[60px] ml-2">
                {mission.completed ? (
                  <span className="text-green-400 text-xs sm:text-sm">Completed</span>
                ) : (
                  <span className="text-xs sm:text-sm">
                    {mission.progress}/{mission.total}
                  </span>
                )}
              </div>
            </div>
            {!mission.completed && (
              <div className="mt-3">
                <Progress 
                  value={(mission.progress / mission.total) * 100} 
                  className="h-2 bg-gray-700" 
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
