
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LiveCasinoCarousel from "@/components/ui/ImageCarousel";
import GameCard from "@/components/ui/GameCard";
import { liveCasinoGames, filterGamesByType } from "@/data/gameData";
import { toast } from "@/components/ui/use-toast";

const LiveCasinoPage = () => {
  const handleGameClick = (gameName: string) => {
    toast({
      title: "Live Game Selected",
      description: `${gameName} would launch here in a real app`,
    });
  };

  // Filter game show type games
  const gameShows = liveCasinoGames.filter(game => game.type === "Game Show");

  return (
    <AppLayout title="Live Casino">
      <div className="p-4 space-y-6">
        <Card className="mb-4 overflow-hidden">
          <CardContent className="p-0">
            <LiveCasinoCarousel />
          </CardContent>
        </Card>
        
        {/* Live Dealer Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold">Live Dealer</h2>
            <span className="text-xs text-gray-500">View All</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {liveCasinoGames
              .filter(game => game.type === "Live" && game.isPopular)
              .slice(0, 4)
              .map(game => (
                <GameCard 
                  key={game.id}
                  {...game}
                  onClick={() => handleGameClick(game.name)}
                />
              ))}
          </div>
        </div>
        
        {/* Game Shows Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold">Game Shows</h2>
            <span className="text-xs text-gray-500">View All</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {gameShows.slice(0, 2).map(game => (
              <GameCard 
                key={game.id}
                {...game}
                onClick={() => handleGameClick(game.name)}
              />
            ))}
          </div>
        </div>
        
        {/* All Live Games with Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="roulette">Roulette</TabsTrigger>
            <TabsTrigger value="blackjack">Blackjack</TabsTrigger>
            <TabsTrigger value="gameshow">Game Show</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-2 gap-3">
              {liveCasinoGames.map(game => (
                <GameCard 
                  key={game.id}
                  {...game}
                  onClick={() => handleGameClick(game.name)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="roulette" className="mt-0">
            <div className="grid grid-cols-2 gap-3">
              {liveCasinoGames
                .filter(game => game.name.toLowerCase().includes("roulette"))
                .map(game => (
                  <GameCard 
                    key={game.id}
                    {...game}
                    onClick={() => handleGameClick(game.name)}
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="blackjack" className="mt-0">
            <div className="grid grid-cols-2 gap-3">
              {liveCasinoGames
                .filter(game => game.name.toLowerCase().includes("blackjack"))
                .map(game => (
                  <GameCard 
                    key={game.id}
                    {...game}
                    onClick={() => handleGameClick(game.name)}
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="gameshow" className="mt-0">
            <div className="grid grid-cols-2 gap-3">
              {gameShows.map(game => (
                <GameCard 
                  key={game.id}
                  {...game}
                  onClick={() => handleGameClick(game.name)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default LiveCasinoPage;
