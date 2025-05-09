
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";

interface Mission {
  id: number;
  title: string;
  xpReward: number;
  progress: number;
  total: number;
  type: string;
  completed?: boolean;
}

interface MissionsSectionProps {
  missions: Mission[];
}

export const MissionsSection = ({ missions }: MissionsSectionProps) => {
  return (
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
  );
};
