
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Game {
  id: string;
  name: string;
  image: string;
  isNew?: boolean;
  isPopular?: boolean;
}

interface GameCategoryRowProps {
  categoryName: string;
  games: Game[];
  onGameClick: (game: Game) => void;
}

const GameCategoryRow: React.FC<GameCategoryRowProps> = ({ 
  categoryName, 
  games,
  onGameClick
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3 px-4">
        <h2 className="text-base font-bold">{categoryName}</h2>
        <span className="text-xs text-gray-500 cursor-pointer">View All</span>
      </div>
      
      <ScrollArea orientation="horizontal" className="w-full pb-1">
        <div className="flex space-x-3 px-4 pb-2">
          {games.map((game) => (
            <div 
              key={game.id} 
              className="flex-shrink-0 w-[140px] cursor-pointer transition-transform active:scale-95"
              onClick={() => onGameClick(game)}
            >
              <div className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                {/* Game image with consistent aspect ratio */}
                <AspectRatio ratio={3/4} className="bg-gray-100">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                
                {/* Badges for New/Popular */}
                <div className="absolute top-2 left-2 flex gap-1">
                  {game.isNew && (
                    <Badge className="bg-amber-400 text-black text-xs px-1.5 py-0.5 rounded-sm">
                      NEW
                    </Badge>
                  )}
                  
                  {game.isPopular && (
                    <Badge className={cn(
                      "bg-virginRed text-white text-xs px-1.5 py-0.5 rounded-sm"
                    )}>
                      Popular
                    </Badge>
                  )}
                </div>
              </div>
              
              {/* Game name */}
              <p className="text-xs font-medium mt-1 truncate">{game.name}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default GameCategoryRow;
