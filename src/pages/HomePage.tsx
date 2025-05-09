
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { MatchCard } from "@/components/football/MatchCard";

const HomePage = () => {
  // Sample fixture data for the homepage
  const fixtures = [
    {
      homeTeam: "Arsenal",
      awayTeam: "Chelsea",
      time: "20:00",
      date: "Today",
      broadcast: "TNT Sports",
      homeOdds: "6/4",
      drawOdds: "12/5",
      awayOdds: "9/5",
    },
    {
      homeTeam: "Liverpool",
      awayTeam: "Man City",
      time: "15:00",
      date: "Tomorrow",
      broadcast: "Sky Sports",
      homeOdds: "7/4",
      drawOdds: "5/2",
      awayOdds: "8/5",
    },
  ];

  return (
    <AppLayout title="Home">
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center justify-center h-32 bg-gradient-to-r from-virginRed/80 to-virginRed text-white">
              <p className="text-lg font-bold">In-Play</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-center h-32 bg-gradient-to-r from-gray-800 to-black text-white">
              <p className="text-lg font-bold">Upcoming</p>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="font-bold text-lg pt-2">Today's Matches</h2>
        <div className="mb-4">
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
        
        <h2 className="font-bold text-lg pt-2">Popular</h2>
        <div className="grid grid-cols-1 gap-4">
          {["Football", "Horse Racing", "Tennis", "Cricket"].map((sport) => (
            <Card key={sport}>
              <CardContent className="p-4 flex items-center justify-between">
                <p>{sport}</p>
                <p className="text-virginRed">▶</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
