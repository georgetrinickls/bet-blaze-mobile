
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  return (
    <AppLayout title="My Bets">
      <div className="p-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="settled">Settled</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-0 space-y-4">
            {bets.map((bet) => (
              <BetCard key={bet.id} bet={bet} />
            ))}
          </TabsContent>
          <TabsContent value="open" className="mt-0 space-y-4">
            {bets
              .filter((bet) => bet.status === "Open")
              .map((bet) => (
                <BetCard key={bet.id} bet={bet} />
              ))}
          </TabsContent>
          <TabsContent value="settled" className="mt-0 space-y-4">
            {bets
              .filter((bet) => bet.status !== "Open")
              .map((bet) => (
                <BetCard key={bet.id} bet={bet} />
              ))}
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
