import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GripHorizontal, Clock, Wallet } from "lucide-react";
import { MatchCard } from "@/components/football/MatchCard";

interface BetProps {
  id: string;
  date: string;
  type: string;
  stake: string;
  returns: string;
  status: "Won" | "Lost" | "Open";
  details: {
    selection: string;
    event: string;
    odds: string;
  }[];
}

interface MatchProps {
  homeTeam: string;
  awayTeam: string;
  time: string;
  date: string;
  broadcast: string;
  homeOdds: string;
  drawOdds: string;
  awayOdds: string;
}

const MyBetsPage = () => {
  const bets: BetProps[] = [
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

  const fixtures: MatchProps[] = [
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
            <Card className="bg-gray-50 border border-gray-200">
              <CardContent className="p-8 text-center">
                <p className="text-gray-600 mb-3">You have no open bets. Check out the latest football fixtures below.</p>
              </CardContent>
            </Card>

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
          </TabsContent>

          <TabsContent value="cashout" className="mt-0 space-y-4">
            <Card className="bg-gray-50 border border-gray-200">
              <CardContent className="p-8 text-center">
                <p className="text-gray-600">You have no cash out bets available.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-0 space-y-4">
            {bets
              .filter((bet) => bet.status !== "Open")
              .map((bet) => (
                <BetCard key={bet.id} bet={bet} />
              ))}
          </TabsContent>

          <TabsContent value="bonuses" className="mt-0 space-y-4">
            <Card className="bg-gray-50 border border-gray-200">
              <CardContent className="p-8 text-center">
                <p className="text-gray-600">You have no active bonuses.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

const BetCard = ({ bet }: { bet: BetProps }) => {
  return (
    <Card>
      <CardHeader className="p-3 border-b">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">{bet.date}</p>
            <p className="text-xs font-medium">{bet.id}</p>
          </div>
          <div>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                bet.status === "Won"
                  ? "bg-green-100 text-green-800"
                  : bet.status === "Lost"
                  ? "bg-red-100 text-red-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {bet.status}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-3">
        <div className="space-y-2">
          {bet.details.map((detail, index) => (
            <div key={index} className="text-sm">
              <p className="font-medium">{detail.selection}</p>
              <p className="text-xs text-gray-500">{detail.event}</p>
              <div className="flex justify-between items-center">
                <p className="text-xs">Odds</p>
                <p className="text-xs font-medium">{detail.odds}</p>
              </div>
            </div>
          ))}
          <div className="border-t mt-2 pt-2">
            <div className="flex justify-between items-center">
              <p className="text-xs">Type</p>
              <p className="text-xs font-medium">{bet.type}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs">Stake</p>
              <p className="text-xs font-medium">{bet.stake}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs font-medium">Returns</p>
              <p className="text-xs font-bold">{bet.returns}</p>
            </div>
          </div>
          {bet.status === "Open" && (
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-2 text-xs border-virginRed text-virginRed hover:bg-virginRed/5"
            >
              Cash Out £18.50
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MyBetsPage;
