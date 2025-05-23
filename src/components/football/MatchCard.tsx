
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GripHorizontal, Clock, ChevronRight } from "lucide-react";
import { useBetSlip } from "@/context/BetSlipContext";
import { useNavigate } from "react-router-dom";

interface MatchProps {
  id?: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  date: string;
  broadcast: string;
  homeOdds: string;
  drawOdds: string;
  awayOdds: string;
  onViewMore?: () => void;
}

export const MatchCard: React.FC<MatchProps> = ({
  id,
  homeTeam,
  awayTeam,
  time,
  date,
  broadcast,
  homeOdds,
  drawOdds,
  awayOdds,
  onViewMore
}) => {
  const navigate = useNavigate();
  const {
    toggleSelectionInBetSlip,
    isSelectionInBetslip
  } = useBetSlip();

  const handleOddsClick = (type: string, odds: string) => {
    const matchName = `${homeTeam} vs ${awayTeam}`;
    const selectionId = `${matchName} - ${type} - ${odds}`;
    const selectionText = type === "home" 
      ? `${homeTeam} to Win` 
      : type === "draw" 
        ? `Draw` 
        : `${awayTeam} to Win`;
    
    toggleSelectionInBetSlip(selectionId, selectionText, matchName, odds);
  };

  const handleViewMore = () => {
    if (onViewMore) {
      onViewMore();
    } else if (id) {
      navigate(`/fixture/${id}`);
    }
  };

  const homeSelectionId = `${homeTeam} vs ${awayTeam} - home - ${homeOdds}`;
  const drawSelectionId = `${homeTeam} vs ${awayTeam} - draw - ${drawOdds}`;
  const awaySelectionId = `${homeTeam} vs ${awayTeam} - away - ${awayOdds}`;

  const isHomeSelected = isSelectionInBetslip(homeSelectionId);
  const isDrawSelected = isSelectionInBetslip(drawSelectionId);
  const isAwaySelected = isSelectionInBetslip(awaySelectionId);

  return <Card className="mb-3">
      <CardContent className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <GripHorizontal className="h-4 w-4 text-virginRed" />
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3 text-gray-500" />
              <span className="text-xs text-gray-500">
                {date}, {time}
              </span>
            </div>
          </div>
          <div className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
            {broadcast}
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm font-medium">{homeTeam} vs {awayTeam}</p>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={handleViewMore} aria-label="View more match details">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" size="sm" className={`text-xs h-9 ${isHomeSelected ? 'bg-virginRed text-white hover:bg-virginRed/90 border-virginRed' : ''}`} onClick={() => handleOddsClick("home", homeOdds)}>
            <div className="flex flex-col">
              <span>Home</span>
              <span className="font-bold">{homeOdds}</span>
            </div>
          </Button>
          <Button variant="outline" size="sm" className={`text-xs h-9 ${isDrawSelected ? 'bg-virginRed text-white hover:bg-virginRed/90 border-virginRed' : ''}`} onClick={() => handleOddsClick("draw", drawOdds)}>
            <div className="flex flex-col">
              <span>Draw</span>
              <span className="font-bold">{drawOdds}</span>
            </div>
          </Button>
          <Button variant="outline" size="sm" className={`text-xs h-9 ${isAwaySelected ? 'bg-virginRed text-white hover:bg-virginRed/90 border-virginRed' : ''}`} onClick={() => handleOddsClick("away", awayOdds)}>
            <div className="flex flex-col">
              <span>Away</span>
              <span className="font-bold">{awayOdds}</span>
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>;
};
