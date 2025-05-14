import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { MatchCard } from "@/components/football/MatchCard";
import { Match } from "@/types/bet";
interface MatchesListProps {
  fixtures: Match[];
}
const MatchesList = ({
  fixtures
}: MatchesListProps) => {
  const [activeFilter, setActiveFilter] = useState("1X2");

  // Filter options
  const filterOptions = ["1X2", "BTTS", "Over/Under 1.5 Goals", "Over/Under 2.5 Goals"];
  const handleFilterChange = (value: string) => {
    if (value) setActiveFilter(value);
  };
  return <>
      <h2 className="font-bold text-lg pt-0\n">Today's Matches</h2>
      
      <div className="overflow-x-auto pb-2 no-scrollbar">
        <ToggleGroup type="single" value={activeFilter} onValueChange={handleFilterChange} className="flex space-x-2">
          {filterOptions.map(option => <ToggleGroupItem key={option} value={option} variant="outline" className="whitespace-nowrap rounded-full px-4 py-2 text-sm ">
              {activeFilter === option ? <Badge variant="default" className="bg-virginRed">
                  {option}
                </Badge> : option}
            </ToggleGroupItem>)}
        </ToggleGroup>
      </div>
      
      <div className="mb-4">
        {fixtures.map((fixture, index) => <MatchCard key={index} homeTeam={fixture.homeTeam} awayTeam={fixture.awayTeam} time={fixture.time} date={fixture.date} broadcast={fixture.broadcast} homeOdds={fixture.homeOdds} drawOdds={fixture.drawOdds} awayOdds={fixture.awayOdds} onViewMore={() => console.log(`View more for ${fixture.homeTeam} vs ${fixture.awayTeam}`)} />)}
      </div>
    </>;
};
export default MatchesList;