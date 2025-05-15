
import React from "react";
import { FixturesList } from "@/components/bets/FixturesList";
import { fixtures } from "@/data/fixtures";

export const FeaturedMatches = () => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-4">Featured Matches</h2>
      <FixturesList fixtures={fixtures} />
    </div>
  );
};
