
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { getFixtureDetails } from "@/data/fixtureMarkets";
import MarketsList from "@/components/fixture/MarketsList";
import PriceBoost from "@/components/ui/PriceBoost";
import { ChevronLeft, Clock, GripHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const FixtureDetailPage = () => {
  const { fixtureId } = useParams<{ fixtureId: string }>();
  const navigate = useNavigate();
  const [activeMarketCategory, setActiveMarketCategory] = useState("popular");
  
  const fixtureDetails = fixtureId ? getFixtureDetails(fixtureId) : undefined;

  if (!fixtureDetails) {
    return (
      <AppLayout title="Fixture not found">
        <div className="p-6 text-center">
          <p>Sorry, we couldn't find details for this fixture.</p>
          <Button 
            variant="default"
            className="mt-4 bg-virginRed hover:bg-virginRed/90" 
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </div>
      </AppLayout>
    );
  }

  const marketCategories = fixtureDetails.marketCategories || [];
  const matchName = `${fixtureDetails.homeTeam} vs ${fixtureDetails.awayTeam}`;

  const handleMarketCategoryChange = (value: string) => {
    if (value) setActiveMarketCategory(value);
  };

  return (
    <AppLayout title={matchName}>
      {/* Header */}
      <div className="bg-virginRed text-white p-4">
        <div className="flex items-center gap-2 mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 p-0 text-white hover:bg-virginRed/80" 
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-bold">Match Details</h1>
        </div>
        
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-2">
            <GripHorizontal className="h-4 w-4" />
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span className="text-xs">
                {fixtureDetails.date}, {fixtureDetails.time}
              </span>
            </div>
          </div>
          <div className="text-xs px-2 py-0.5 rounded-full bg-white/20">
            {fixtureDetails.broadcast}
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-2">{fixtureDetails.homeTeam} vs {fixtureDetails.awayTeam}</h2>
      </div>

      <div className="p-4">
        {/* Market Categories Pill Rail */}
        <div className="mb-6 overflow-x-auto pb-2 no-scrollbar">
          <div className="w-max">
            <ToggleGroup
              type="single"
              value={activeMarketCategory}
              onValueChange={handleMarketCategoryChange}
              className="inline-flex space-x-2"
            >
              {marketCategories.map((category) => (
                <ToggleGroupItem
                  key={category.id}
                  value={category.id}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition-all ${
                    activeMarketCategory === category.id
                      ? "bg-[#303F6B] text-white border-transparent"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {category.name}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>

        {/* Price Boosts Section */}
        {fixtureDetails.priceBoosts && fixtureDetails.priceBoosts.length > 0 && (
          <div className="mb-6">
            <h2 className="font-bold text-lg mb-3">Price Boosts</h2>
            <div className="overflow-x-auto no-scrollbar">
              <div className="flex space-x-4 px-1">
                {fixtureDetails.priceBoosts.map((boost, idx) => (
                  <PriceBoost
                    key={idx}
                    match={boost.match}
                    selections={boost.selections}
                    oldOdds={boost.oldOdds}
                    newOdds={boost.newOdds}
                    bets={boost.bets}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Markets List */}
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-3">Betting Markets</h2>
          <MarketsList
            categoryId={activeMarketCategory}
            marketCategories={marketCategories}
            matchName={matchName}
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default FixtureDetailPage;
