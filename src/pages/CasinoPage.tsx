
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CasinoCarousel from "@/components/ui/ImageCarousel";
import GameCard from "@/components/ui/GameCard";
import { casinoGames, filterGamesByType } from "@/data/gameData";
import { CirclePlay, Dices, PlaySquare } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const CasinoPage = () => {
  const handleGameClick = (gameName: string) => {
    toast({
      title: "Game Selected",
      description: `${gameName} would launch here in a real app`,
    });
  };

  return (
    <AppLayout title="Casino">
      <div className="p-4">
        <Card className="mb-4 overflow-hidden">
          <CardContent className="p-0">
            <CasinoCarousel />
          </CardContent>
        </Card>
        
        {/* Featured Games Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold">Featured Games</h2>
            <span className="text-xs text-gray-500">View All</span>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {casinoGames.filter(game => game.isPopular).slice(0, 3).map(game => (
              <GameCard 
                key={game.id}
                {...game}
                onClick={() => handleGameClick(game.name)}
              />
            ))}
          </div>
        </div>
        
        {/* Categories Section */}
        <div className="mb-6">
          <h2 className="text-base font-bold mb-3">Categories</h2>
          <div className="grid grid-cols-3 gap-4">
            <Card className="flex flex-col items-center justify-center py-4 cursor-pointer hover:bg-gray-50">
              <CirclePlay className="w-8 h-8 mb-2 text-virginRed" />
              <p className="text-xs font-medium">Slots</p>
            </Card>
            <Card className="flex flex-col items-center justify-center py-4 cursor-pointer hover:bg-gray-50">
              <Dices className="w-8 h-8 mb-2 text-virginRed" />
              <p className="text-xs font-medium">Table Games</p>
            </Card>
            <Card className="flex flex-col items-center justify-center py-4 cursor-pointer hover:bg-gray-50">
              <PlaySquare className="w-8 h-8 mb-2 text-virginRed" />
              <p className="text-xs font-medium">Card Games</p>
            </Card>
          </div>
        </div>
        
        {/* All Games with Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="slot">Slots</TabsTrigger>
            <TabsTrigger value="table">Table</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-2 gap-3">
              {casinoGames.map(game => (
                <GameCard 
                  key={game.id}
                  {...game}
                  onClick={() => handleGameClick(game.name)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="slot" className="mt-0">
            <div className="grid grid-cols-2 gap-3">
              {filterGamesByType(casinoGames, "slot").map(game => (
                <GameCard 
                  key={game.id}
                  {...game}
                  onClick={() => handleGameClick(game.name)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="table" className="mt-0">
            <div className="grid grid-cols-2 gap-3">
              {filterGamesByType(casinoGames, "table").map(game => (
                <GameCard 
                  key={game.id}
                  {...game}
                  onClick={() => handleGameClick(game.name)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="new" className="mt-0">
            <div className="grid grid-cols-2 gap-3">
              {casinoGames.filter(game => game.isNew).map(game => (
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

export default CasinoPage;
