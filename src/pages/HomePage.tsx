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
      <div className="p-4 space-y-6">
        {/* Promo Banner Carousel */}
        <ImageCarousel />

        {/* Featured Bet Builder */}
        <section className="pt-2">
          <BetBuilderCard 
            match={betBuilderData.match}
            options={betBuilderData.options}
            odds={betBuilderData.odds}
            onAddToBetslip={() => console.log("Added to betslip:", betBuilderData)}
          />
        </section>

        {/* Today's Matches */}
        <section>
          <MatchesList fixtures={fixtures} />
        </section>

        {/* Explore Popular Sports */}
        <section>
          <PopularSports />
        </section>
      </div>
    </AppLayout>
  );
};

export default HomePage;
