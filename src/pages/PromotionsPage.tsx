
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VBLevels } from "@/components/promotions/VBLevels";
import { PromotionsHub } from "@/components/promotions/PromotionsHub";
import { Badge } from "@/components/ui/badge";

const PromotionsPage = () => {
  const [activeTab, setActiveTab] = useState("promotions-hub");

  return (
    <AppLayout title="Promotions">
      <div className="p-4 pb-20">
        <Tabs 
          defaultValue="promotions-hub" 
          value={activeTab}
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-4">
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
