
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface GameCardProps {
  id: string;
  name: string;
  image: string;
  type: "Live" | "Slot" | "Table" | "Game Show";
  isNew?: boolean;
  isPopular?: boolean;
  onClick?: () => void;
}

const GameCard: React.FC<GameCardProps> = ({
  name,
  image,
  type,
  isNew,
  isPopular,
  onClick,
}) => {
  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]" 
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative">
          {/* Game Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Badges for game type and special tags */}
          <div className="absolute top-2 left-2 flex gap-1">
            <Badge 
              className={cn(
                "text-xs font-medium py-0.5 rounded-sm",
                type === "Live" && "bg-virginRed text-white",
                type === "Slot" && "bg-blue-500 text-white",
                type === "Table" && "bg-emerald-600 text-white",
                type === "Game Show" && "bg-purple-600 text-white"
              )}
            >
              {type}
            </Badge>
            
            {isNew && (
              <Badge className="bg-amber-400 text-black text-xs font-medium py-0.5 rounded-sm">
                NEW
              </Badge>
            )}
            
            {isPopular && (
              <Badge className="bg-virginRedNew text-white text-xs font-medium py-0.5 rounded-sm">
                Popular
              </Badge>
            )}
          </div>
        </div>
        
        {/* Game Name */}
        <div className="p-2 bg-white">
          <p className="text-xs font-medium truncate text-left">{name}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
