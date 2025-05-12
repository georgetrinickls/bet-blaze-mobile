
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CasinoCarousel from "@/components/ui/ImageCarousel";

const CasinoPage = () => {
  return (
    <AppLayout title="Casino">
      <div className="p-4">
        <Card className="mb-4 overflow-hidden">
          <CardContent className="p-0">
            <CasinoCarousel />
          </CardContent>
        </Card>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="slots">Slots</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
            <TabsTrigger value="table">Table</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-2 gap-3">
              {["Mega Moolah", "Starburst", "Book of Dead", "Gonzo's Quest", "Big Bass", "Immortal Romance"].map((game) => (
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
          <TabsContent value="slots" className="mt-0">
            <div className="flex items-center justify-center h-32">
              <p className="text-gray-500">Slots games go here</p>
            </div>
          </TabsContent>
          <TabsContent value="live" className="mt-0">
            <div className="flex items-center justify-center h-32">
              <p className="text-gray-500">Live casino games go here</p>
            </div>
          </TabsContent>
          <TabsContent value="table" className="mt-0">
            <div className="flex items-center justify-center h-32">
              <p className="text-gray-500">Table games go here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default CasinoPage;
