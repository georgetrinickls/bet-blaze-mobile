
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GameCategoryRow from "@/components/casino/GameCategoryRow";
import { liveCasinoLobbyData } from "@/data/liveCasinoLobbyData";
import LiveCasinoFeaturedCarousel from "@/components/ui/casino-carousel";
import { toast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const LiveCasinoPage = () => {
  const handleGameClick = (game: { name: string; }) => {
    toast({
      title: "Live Game Selected",
      description: `${game.name} would launch here in a real app`,
    });
  };

  return (
        <AppLayout title="">
      <div className="p-4 space-y-6">
        {/* Promo Banner Carousel */}
        <ImageCarousel />
        
        {/* Live Casino Games Categories */}
        <div className="mb-6">
          <GameCategoryRow
            key="live-casino"
            categoryName="Live Casino Games"
            games={liveCasinoLobbyData.categories.find(c => c.id === "live-casino")?.games || []}
            onGameClick={handleGameClick}
          />
        </div>
        
        {/* Roulette Games */}
        <div className="mb-6">
          <GameCategoryRow
            key="roulette"
            categoryName="Roulette"
            games={liveCasinoLobbyData.categories.find(c => c.id === "roulette")?.games || []}
            onGameClick={handleGameClick}
          />
        </div>
        
        {/* All Live Games with Tabs */}
        <div className="px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="roulette">Roulette</TabsTrigger>
              <TabsTrigger value="card-games">Card Games</TabsTrigger>
              <TabsTrigger value="game-shows">Game Shows</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-2 gap-3">
                {liveCasinoLobbyData.categories
                  .find(c => c.id === "live-casino")?.games
                  .map(game => (
                    <div 
                      key={game.id}
                      className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm cursor-pointer"
                      onClick={() => handleGameClick(game)}
                    >
                      <AspectRatio ratio={1/1} className="bg-gray-100">
                        <img
                          src={game.image}
                          alt={game.name}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      
                      <div className="absolute top-2 left-2 flex gap-1">
                        {game.isNew && (
                          <Badge className="bg-amber-400 text-black text-xs px-1.5 py-0.5 rounded-sm">
                            NEW
                          </Badge>
                        )}
                        
                        {game.isPopular && (
                          <Badge className="bg-virginRed text-white text-xs px-1.5 py-0.5 rounded-sm">
                            Popular
                          </Badge>
                        )}
                      </div>
                      
                      <div className="p-2 bg-white">
                        <p className="text-xs font-medium truncate">{game.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="roulette" className="mt-0">
              <div className="grid grid-cols-2 gap-3">
                {liveCasinoLobbyData.categories
                  .find(c => c.id === "roulette")?.games
                  .map(game => (
                    <div 
                      key={game.id}
                      className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm cursor-pointer"
                      onClick={() => handleGameClick(game)}
                    >
                      <AspectRatio ratio={1/1} className="bg-gray-100">
                        <img
                          src={game.image}
                          alt={game.name}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      
                      <div className="absolute top-2 left-2 flex gap-1">
                        {game.isNew && (
                          <Badge className="bg-amber-400 text-black text-xs px-1.5 py-0.5 rounded-sm">
                            NEW
                          </Badge>
                        )}
                        
                        {game.isPopular && (
                          <Badge className="bg-virginRed text-white text-xs px-1.5 py-0.5 rounded-sm">
                            Popular
                          </Badge>
                        )}
                      </div>
                      
                      <div className="p-2 bg-white">
                        <p className="text-xs font-medium truncate">{game.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="card-games" className="mt-0">
              <div className="grid grid-cols-2 gap-3">
                {liveCasinoLobbyData.categories
                  .find(c => c.id === "live-casino")?.games
                  .filter(game => 
                    game.name.toLowerCase().includes('holdem') || 
                    game.name.toLowerCase().includes('baccarat')
                  )
                  .map(game => (
                    <div 
                      key={game.id}
                      className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm cursor-pointer"
                      onClick={() => handleGameClick(game)}
                    >
                      <AspectRatio ratio={1/1} className="bg-gray-100">
                        <img
                          src={game.image}
                          alt={game.name}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      
                      <div className="absolute top-2 left-2 flex gap-1">
                        {game.isNew && (
                          <Badge className="bg-amber-400 text-black text-xs px-1.5 py-0.5 rounded-sm">
                            NEW
                          </Badge>
                        )}
                        
                        {game.isPopular && (
                          <Badge className="bg-virginRed text-white text-xs px-1.5 py-0.5 rounded-sm">
                            Popular
                          </Badge>
                        )}
                      </div>
                      
                      <div className="p-2 bg-white">
                        <p className="text-xs font-medium truncate">{game.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="game-shows" className="mt-0">
              <div className="grid grid-cols-2 gap-3">
                {liveCasinoLobbyData.categories
                  .find(c => c.id === "live-casino")?.games
                  .filter(game => 
                    game.name.toLowerCase().includes('crazy') || 
                    game.name.toLowerCase().includes('crash')
                  )
                  .map(game => (
                    <div 
                      key={game.id}
                      className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm cursor-pointer"
                      onClick={() => handleGameClick(game)}
                    >
                      <AspectRatio ratio={1/1} className="bg-gray-100">
                        <img
                          src={game.image}
                          alt={game.name}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      
                      <div className="absolute top-2 left-2 flex gap-1">
                        {game.isNew && (
                          <Badge className="bg-amber-400 text-black text-xs px-1.5 py-0.5 rounded-sm">
                            NEW
                          </Badge>
                        )}
                        
                        {game.isPopular && (
                          <Badge className="bg-virginRed text-white text-xs px-1.5 py-0.5 rounded-sm">
                            Popular
                          </Badge>
                        )}
                      </div>
                      
                      <div className="p-2 bg-white">
                        <p className="text-xs font-medium truncate">{game.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

export default LiveCasinoPage;
