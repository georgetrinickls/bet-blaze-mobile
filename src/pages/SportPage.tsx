
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CategoryRail } from "@/components/sports/CategoryRail";
import { PopularBetBuilders } from "@/components/sports/PopularBetBuilders";
import { FeaturedMatches } from "@/components/sports/FeaturedMatches";
import { LeaguesCompetitions } from "@/components/sports/LeaguesCompetitions";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/layout/AppLayout";

const SportPage = () => {
  const { sport } = useParams<{ sport: string }>();
  const navigate = useNavigate();
  
  // Format the sport name for display
  const formatSportName = (sportSlug: string) => {
    return sportSlug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const displayName = sport ? formatSportName(sport) : "";
  
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <AppLayout title={displayName}>
      <div className="flex items-center p-4 bg-virginRedNew text-white border-b border-gray-200">
        <Button variant="ghost" size="icon" className="text-white p-0 mr-2" onClick={handleBack}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold flex-1">{displayName}</h1>
      </div>
      
      <Tabs defaultValue="popular" className="w-full">
        <TabsList className="w-full sticky top-[64px] z-30 bg-white rounded-none border-b border-gray-200 p-0 h-auto">
          <TabsTrigger 
            value="popular" 
            className="flex-1 data-[state=active]:bg-white py-3 border-b-2 border-transparent data-[state=active]:border-virginRedNew data-[state=active]:font-bold rounded-none"
          >
            Popular
          </TabsTrigger>
          <TabsTrigger 
            value="leagues" 
            className="flex-1 data-[state=active]:bg-white py-3 border-b-2 border-transparent data-[state=active]:border-virginRedNew data-[state=active]:font-bold rounded-none"
          >
            Leagues & Competitions
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="popular" className="mt-0 p-4">
          <CategoryRail />
          <PopularBetBuilders />
          <FeaturedMatches />
        </TabsContent>
        
        <TabsContent value="leagues" className="mt-0 p-4">
          <LeaguesCompetitions />
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default SportPage;
