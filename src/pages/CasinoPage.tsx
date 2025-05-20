import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import GameCategoryRow from "@/components/casino/GameCategoryRow";
import { casinoLobbyData } from "@/data/casinoLobbyData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CirclePlay, Dices, PlaySquare } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import CasinoFeaturedCarousel from "@/components/casino/CasinoFeaturedCarousel";

const CasinoPage = () => {
  const handleGameClick = (game: { name: string }) => {
    toast({
      title: "Game Selected",
      description: `${game.name} would launch here in a real app`,
    });
  };

  return (
    <AppLayout title="Casino">
      <div className="pb-20">
        <Card className="mb-4 overflow-hidden">
          <CardContent className="p-0">
            <CasinoFeaturedCarousel />
          </CardContent>
        </Card>
        
        {/* Mapped Category Rows */}
        {casinoLobbyData.categories.map((category) => (
          <GameCategoryRow
            key={category.id}
            categoryName={category.name}
            games={category.games}
            onGameClick={handleGameClick}
          />
        ))}
        
        {/* Categories Section */}
        <div className="mb-6 px-4">
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
        <div className="px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="slot">Slots</TabsTrigger>
              <TabsTrigger value="table">Table</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-2 gap-3">
                {casinoLobbyData.categories.flatMap(category => 
                  category.games.map(game => (
                    <div 
                      key={game.id}
                      className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm cursor-pointer"
                      onClick={() => handleGameClick(game)}
                    >
                      <AspectRatio ratio={3/4} className="bg-gray-100">
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
                  ))
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="slot" className="mt-0">
              <div className="grid grid-cols-2 gap-3">
                {casinoLobbyData.categories
                  .find(c => c.id === "slots")?.games
                  .map(game => (
                    <div 
                      key={game.id}
                      className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm cursor-pointer"
                      onClick={() => handleGameClick(game)}
                    >
                      <AspectRatio ratio={3/4} className="bg-gray-100">
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
            
            <TabsContent value="table" className="mt-0">
              <div className="grid grid-cols-2 gap-3">
                {casinoLobbyData.categories
                  .find(c => c.id === "roulette")?.games
                  .map(game => (
                    <div 
                      key={game.id}
                      className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm cursor-pointer"
                      onClick={() => handleGameClick(game)}
                    >
                      <AspectRatio ratio={3/4} className="bg-gray-100">
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
            
            <TabsContent value="new" className="mt-0">
              <div className="grid grid-cols-2 gap-3">
                {casinoLobbyData.categories
                  .flatMap(category => 
                    category.games.filter(game => game.isNew)
                  )
                  .map(game => (
                    <div 
                      key={game.id}
                      className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm cursor-pointer"
                      onClick={() => handleGameClick(game)}
                    >
                      <AspectRatio ratio={3/4} className="bg-gray-100">
                        <img
                          src={game.image}
                          alt={game.name}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      
                      <div className="absolute top-2 left-2 flex gap-1">
                        <Badge className="bg-amber-400 text-black text-xs px-1.5 py-0.5 rounded-sm">
                          NEW
                        </Badge>
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

export default CasinoPage;
