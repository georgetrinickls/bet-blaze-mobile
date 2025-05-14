import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { BetBuilderCard } from "@/components/betbuilder/BetBuilderCard";
import ImageCarousel from "@/components/ui/ImageCarousel";
import MatchesList from "@/components/homepage/MatchesList";
import PopularSports from "@/components/homepage/PopularSports";
import QuickLinks from "@/components/homepage/QuickLinks";
import { fixtures } from "@/data/fixtures";
import { betBuilderData } from "@/data/betBuilderData";
const HomePage = () => {
  return <AppLayout title="Home">
      <div className="p-4 space-y-0\\n">
        {/* Promo Banner Carousel */}
        <ImageCarousel />

        <QuickLinks />

        {/* Featured Bet Builder */}
        <section className="pt-0\n">
          <BetBuilderCard match={betBuilderData.match} options={betBuilderData.options} odds={betBuilderData.odds} onAddToBetslip={() => console.log("Added to betslip:", betBuilderData)} />
        </section>

        {/* Today's Matches */}
        <section>
          <MatchesList fixtures={fixtures} />
        </section>

        {/* Popular Sports */}
        <section>
          <PopularSports />
        </section>
      </div>
    </AppLayout>;
};
export default HomePage;