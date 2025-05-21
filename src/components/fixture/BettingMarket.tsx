
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useBetSlip } from "@/context/BetSlipContext";
import { Market } from "@/data/fixtureMarkets";

interface BettingMarketProps {
  market: Market;
  matchName: string;
}

const BettingMarket = ({ market, matchName }: BettingMarketProps) => {
  const { toggleSelectionInBetSlip, isSelectionInBetslip } = useBetSlip();

  const handleOddsClick = (selection: { id: string; name: string; odds: string }) => {
    const selectionId = `${matchName} - ${market.name} - ${selection.name} - ${selection.odds}`;
    toggleSelectionInBetSlip(selectionId, selection.name, matchName, selection.odds);
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-medium">{market.name}</h3>
          {market.description && (
            <p className="text-sm text-gray-500">{market.description}</p>
          )}
        </div>
        <div className={`grid grid-cols-${market.selections.length} gap-2`}>
          {market.selections.map((selection) => {
            const selectionId = `${matchName} - ${market.name} - ${selection.name} - ${selection.odds}`;
            const isSelected = isSelectionInBetslip(selectionId);
            
            return (
              <Button
                key={selection.id}
                variant="outline"
                className={`h-16 flex flex-col justify-center ${
                  isSelected ? 'bg-virginRed text-white hover:bg-virginRed/90 border-virginRed' : ''
                }`}
                onClick={() => handleOddsClick(selection)}
              >
                <span className="text-sm">{selection.name}</span>
                <span className="text-md font-bold">{selection.odds}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default BettingMarket;
