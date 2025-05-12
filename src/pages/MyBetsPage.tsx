import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { FixturesList } from "@/components/bets/FixturesList";
import { Match } from "@/types/bet";

const MyBetsPage = () => {
  const fixtures: Match[] = [
    {
      homeTeam: "Bodø/Glimt",
      awayTeam: "Tottenham",
      time: "20:00",
      date: "Today",
      broadcast: "BT Sport",
      homeOdds: "29/20",
      drawOdds: "14/5",
      awayOdds: "31/20",
    },
    {
      homeTeam: "Man Utd",
      awayTeam: "Athletic Bilbao",
      time: "15:00",
      date: "Tomorrow",
      broadcast: "Sky Sports",
      homeOdds: "10/11",
      drawOdds: "5/2",
      awayOdds: "14/5",
    },
  ];

  return (
    <AppLayout title="My Bets">
      <div className="p-4">
        <h1 className="text-lg font-semibold mb-2">You have no open bets.</h1>
        <p className="mb-4 text-sm text-gray-600">Check out the latest football fixtures below</p>
        <FixturesList fixtures={fixtures} />
      </div>
    </AppLayout>
  );
};

export default MyBetsPage;
