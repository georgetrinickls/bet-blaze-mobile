
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LiveCasinoPage = () => {
  return (
    <AppLayout title="Live Casino">
      <div className="p-4">
        <Card className="mb-4 overflow-hidden">
          <CardContent className="p-0 relative">
            <div className="bg-gradient-to-r from-virginRedNew to-purple-700 h-32 flex items-end p-4">
              <div className="text-white">
                <h2 className="text-xl font-bold">Live Casino Bonus</h2>
                <p className="text-sm opacity-90">Get £100 Bonus on Live Casino Games</p>
                <Button size="sm" variant="outline" className="mt-2 bg-white text-virginRedNew border-0">
                  Play Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="roulette">Roulette</TabsTrigger>
            <TabsTrigger value="blackjack">Blackjack</TabsTrigger>
            <TabsTrigger value="poker">Poker</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-2 gap-3">
              {["Live Roulette", "Live Blackjack", "Dream Catcher", "Lightning Dice", "Football Studio", "Casino Holdem"].map((game) => (
                <Card key={game} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-24 bg-gray-300"></div>
                    <div className="p-2">
                      <p className="text-xs font-medium truncate">{game}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="roulette" className="mt-0">
            <div className="flex items-center justify-center h-32">
              <p className="text-gray-500">Live roulette games go here</p>
            </div>
          </TabsContent>
          <TabsContent value="blackjack" className="mt-0">
            <div className="flex items-center justify-center h-32">
              <p className="text-gray-500">Live blackjack games go here</p>
            </div>
          </TabsContent>
          <TabsContent value="poker" className="mt-0">
            <div className="flex items-center justify-center h-32">
              <p className="text-gray-500">Live poker games go here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default LiveCasinoPage;
