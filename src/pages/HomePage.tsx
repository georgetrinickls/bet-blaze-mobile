import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import PriceBoostCarousel from "@/components/ui/PriceBoostCarousel";
import ImageCarousel from "@/components/ui/ImageCarousel";
import MatchesList from "@/components/homepage/MatchesList";
import PopularSports from "@/components/homepage/PopularSports";
import QuickLinks from "@/components/homepage/QuickLinks";
import { fixtures } from "@/data/fixtures";

const HomePage = () => {
  return (
    <AppLayout title="Home">
      <div className="p-4 space-y-6">
        {/* Promo Banner Carousel */}
        <ImageCarousel />

        {/* Quick Links */}
        <QuickLinks />

        {/* Price Boost Carousel */}
        <PriceBoostCarousel />

        {/* Today's Matches */}
        <section>
          <MatchesList fixtures={fixtures} />
        </section>

        {/* Popular Sports */}
        <section>
          <PopularSports />
        </section>
      </div>
    </AppLayout>
  );
};

export default HomePage;
