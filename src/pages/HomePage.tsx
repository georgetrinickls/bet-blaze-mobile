
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { BetBuilderCard } from "@/components/betbuilder/BetBuilderCard";
import ImageCarousel from "@/components/ui/ImageCarousel";
import MatchesList from "@/components/homepage/MatchesList";
import PopularSports from "@/components/homepage/PopularSports";
import { fixtures } from "@/data/fixtures";
import { betBuilderData } from "@/data/betBuilderData";

const HomePage = () => {
  return (
    <AppLayout title="Home">
      <div className="p-4 space-y-4">
        {/* Image Carousel */}
        <ImageCarousel />
        
        {/* Popular Bet Builder Card */}
        <BetBuilderCard 
          match={betBuilderData.match}
          options={betBuilderData.options}
          odds={betBuilderData.odds}
          onAddToBetslip={() => console.log("Added to betslip:", betBuilderData)}
        />
        
        {/* Today's Matches */}
        <MatchesList fixtures={fixtures} />
        
        {/* Popular Sports */}
        <PopularSports />
      </div>
    </AppLayout>
  );
};

export default HomePage;
