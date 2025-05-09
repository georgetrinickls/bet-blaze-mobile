
import React from "react";
import { MatchCard } from "@/components/football/MatchCard";
import { Match } from "@/types/bet";

interface FixturesListProps {
  fixtures: Match[];
}

export const FixturesList: React.FC<FixturesListProps> = ({ fixtures }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold mt-6 mb-3">Football Fixtures</h2>
      {fixtures.map((fixture, index) => (
        <MatchCard
          key={index}
          homeTeam={fixture.homeTeam}
          awayTeam={fixture.awayTeam}
          time={fixture.time}
          date={fixture.date}
          broadcast={fixture.broadcast}
          homeOdds={fixture.homeOdds}
          drawOdds={fixture.drawOdds}
          awayOdds={fixture.awayOdds}
          onViewMore={() => console.log(`View more for ${fixture.homeTeam} vs ${fixture.awayTeam}`)}
        />
      ))}
    </div>
  );
};
