
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VBLevels } from "@/components/promotions/VBLevels";
import { PromotionsHub } from "@/components/promotions/PromotionsHub";
import { Badge } from "@/components/ui/badge";
import ImageCarousel from "@/components/ui/ImageCarousel";

const PromotionsPage = () => {
  const [activeTab, setActiveTab] = useState("promotions");

  return (
    <AppLayout title="Promotions">
      <div className="p-4 pb-20">
        <Tabs 
          defaultValue="promotions" 
          value={activeTab}
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="promotions">Promotions</TabsTrigger>
            <TabsTrigger value="promotions-hub" className="relative">
              Promotions Hub
              <Badge className="absolute -top-1 -right-1 bg-virginRedNew text-white text-xs min-w-5 h-5 flex items-center justify-center rounded-full p-0">
                NEW
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="vblevels">
              VB Levels
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="promotions" className="space-y-4">
            <ImageCarousel />
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="text-lg font-bold mb-2">First Deposit Bonus</h3>
                <p className="text-sm text-gray-600">Get 100% bonus up to £100 on your first deposit.</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="text-lg font-bold mb-2">Free Bet Club</h3>
                <p className="text-sm text-gray-600">Place £10 in accumulators, get a £10 free bet every week.</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="text-lg font-bold mb-2">2UP Early Payout</h3>
                <p className="text-sm text-gray-600">Get paid out as a winner if your team goes 2 goals ahead.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="promotions-hub">
            <PromotionsHub />
          </TabsContent>
          
          <TabsContent value="vblevels">
            <VBLevels />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default PromotionsPage;
