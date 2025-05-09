
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BetCard } from "@/components/bets/BetCard";
import { FixturesList } from "@/components/bets/FixturesList";
import { EmptyTabContent } from "@/components/bets/EmptyTabContent";
import { Bet, Match } from "@/types/bet";

const MyBetsPage = () => {
  const bets: Bet[] = [
    {
      id: "BET1234567",
      date: "Today, 12:30",
      type: "Single",
      stake: "£10.00",
      returns: "£25.00",
      status: "Won",
      details: [
        {
          selection: "Liverpool to win",
          event: "Liverpool vs Manchester United",
          odds: "2.50",
        },
      ],
    },
    {
      id: "BET7654321",
      date: "Yesterday, 15:45",
      type: "Double",
      stake: "£5.00",
      returns: "£0.00",
      status: "Lost",
      details: [
        {
          selection: "Arsenal to win",
          event: "Arsenal vs Chelsea",
          odds: "2.10",
        },
        {
          selection: "Over 2.5 goals",
          event: "Tottenham vs Manchester City",
          odds: "1.80",
        },
      ],
    },
    {
      id: "BET8765432",
      date: "05 May, 16:00",
      type: "Single",
      stake: "£20.00",
      returns: "Pending",
      status: "Open",
      details: [
        {
          selection: "Draw",
          event: "Leicester vs Newcastle",
          odds: "3.25",
        },
      ],
    },
  ];

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
        <Tabs defaultValue="open" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="cashout">Cash Out</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="bonuses">Bonuses</TabsTrigger>
          </TabsList>

          <TabsContent value="open" className="mt-0 space-y-4">
            <EmptyTabContent message="You have no open bets. Check out the latest football fixtures below." />
            <FixturesList fixtures={fixtures} />
          </TabsContent>

          <TabsContent value="cashout" className="mt-0 space-y-4">
            <EmptyTabContent message="You have no cash out bets available." />
          </TabsContent>

          <TabsContent value="history" className="mt-0 space-y-4">
            {bets
              .filter((bet) => bet.status !== "Open")
              .map((bet) => (
                <BetCard key={bet.id} bet={bet} />
              ))}
          </TabsContent>

          <TabsContent value="bonuses" className="mt-0 space-y-4">
            <EmptyTabContent message="You have no active bonuses." />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default MyBetsPage;
