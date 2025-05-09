import React from "react";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import { LevelTrackerProps } from "./types";

export const LevelTracker = ({
  userLevel,
  userLevelName,
  levelNames,
  currentXP,
  nextLevelXP,
  xpToNextLevel,
  xpProgress,
}: LevelTrackerProps) => {
  return (
    <div className="p-5 border-b border-gray-800">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Star className="h-5 w-5 text-virginRedNew mr-2" />
          <span className="font-bold">Level {userLevel}: {userLevelName}</span>
        </div>
        <span className="text-xs text-white/70">
          {currentXP} / {nextLevelXP} XP
        </span>
      </div>
      <Progress value={xpProgress} className="h-2 bg-gray-700" />
      
      {/* Horizontal Level Tracker */}
      <div className="mt-6 mb-2">
        <div className="flex justify-between items-center mb-1">
          {levelNames.map((name, index) => (
            <div 
              key={index} 
              className={`text-xs font-medium ${index + 1 <= userLevel ? 'text-virginRedNew' : 'text-gray-400'}`}
            >
              {name}
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="h-1 bg-gray-700 rounded-full">
            <div 
              className="absolute top-0 left-0 h-1 bg-virginRedNew rounded-full" 
              style={{ width: `${(userLevel - 1) / (levelNames.length - 1) * 100}%` }}
            />
          </div>

          {/* Level Milestone Markers */}
          <div className="flex justify-between absolute w-full top-1/2 transform -translate-y-1/2">
            {levelNames.map((_, index) => (
              <div 
                key={index}
                className={`w-4 h-4 rounded-full border-2 border-gray-900 transform -translate-x-1/2 ${
                  index + 1 < userLevel ? 'bg-virginRedNew' : 
                  index + 1 === userLevel ? 'bg-virginRedNew ring-2 ring-virginRedNew/50' : 
                  'bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Motivational Message */}
      <div className="mt-4 p-2 bg-virginRedNew/10 rounded-lg text-center">
        <p className="text-sm">
          Only <span className="font-bold text-virginRedNew">{xpToNextLevel} XP</span> to go — next stop: <span className="font-bold">{levelNames[userLevel]} Level!</span>
        </p>
      </div>
      
      {/* Level Indicator - Keeping original design as backup */}
      <div className="flex justify-between mt-4">
        {Array.from({ length: levelNames.length }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center 
              ${index + 1 <= userLevel ? 'bg-virginRedNew' : 'bg-gray-700'}`}
            >
              {index + 1}
            </div>
            {index < levelNames.length - 1 && (
              <div className={`w-full h-1 mt-4 
              ${index + 1 < userLevel ? 'bg-virginRedNew' : 'bg-gray-700'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
