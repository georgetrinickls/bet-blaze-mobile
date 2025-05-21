
import React from "react";
import BettingMarket from "./BettingMarket";
import { MarketCategory } from "@/data/fixtureMarkets";

interface MarketsListProps {
  categoryId: string;
  marketCategories: MarketCategory[];
  matchName: string;
}

const MarketsList = ({ categoryId, marketCategories, matchName }: MarketsListProps) => {
  const selectedCategory = marketCategories.find((cat) => cat.id === categoryId);
  
  if (!selectedCategory) {
    return <div className="p-4 text-center text-gray-500">No markets available</div>;
  }

  return (
    <div className="space-y-4">
      {selectedCategory.markets.map((market) => (
        <BettingMarket
          key={market.id}
          market={market}
          matchName={matchName}
        />
      ))}
    </div>
  );
};

export default MarketsList;
