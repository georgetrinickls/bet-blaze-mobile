
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useBetSlip } from "@/context/BetSlipContext";
import { X } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface BetSlipSheetProps {
  children?: React.ReactNode;
}

const BetSlipSheet = ({ children }: BetSlipSheetProps) => {
  const { 
    betCount, 
    betslip, 
    clearBetSlip, 
    activeBetType, 
    setActiveBetType,
    stakes,
    accaStake, 
    updateStake,
    updateAccaStake,
    calculateReturns,
    calculateAccaReturns,
    getTotalStakes,
    calculateTotalOdds,
    toggleSelectionInBetSlip
  } = useBetSlip();

  const handleStakeChange = (id: string, value: string) => {
    const stake = parseFloat(value) || 0;
    updateStake(id, stake);
  };

  const handleAccaStakeChange = (value: string) => {
    const stake = parseFloat(value) || 0;
    updateAccaStake(stake);
  };

  const totalStake = getTotalStakes();
  const hasValidStake = totalStake > 0;

  const renderSinglesTab = () => (
    <div className="space-y-3">
      {betslip.map((selection) => (
        <Card key={selection.id} className="relative overflow-hidden">
          <CardHeader className="p-3 pb-0 flex flex-row justify-between items-start">
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">{selection.match}</p>
              <p className="font-bold">{selection.display}</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6 rounded-full p-0 absolute top-2 right-2"
              onClick={() => {
                const id = selection.id;
                const display = selection.display;
                const match = selection.match;
                const odds = selection.odds;
                toggleSelectionInBetSlip(id, display, match, odds);
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-3 pt-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Odds</span>
              <span className="font-bold">{selection.odds}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Stake</span>
              <Input
                type="number"
                value={stakes[selection.id] || ""}
                onChange={(e) => handleStakeChange(selection.id, e.target.value)}
                placeholder="£0.00"
                min="0.10"
                step="0.10"
                className="h-8 text-right"
              />
            </div>
            <div className="flex items-center justify-between mt-2 text-virginRed">
              <span className="text-sm font-medium">Returns</span>
              <span className="font-bold">
                {formatCurrency(calculateReturns(selection.id))}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderAccaTab = () => {
    const totalOdds = calculateTotalOdds();
    const formattedOdds = totalOdds.toFixed(2);
    const returns = calculateAccaReturns();

    return (
      <Card>
        <CardHeader className="p-3 pb-0">
          <div className="space-y-1">
            <p className="font-bold">Accumulator ({betslip.length} selections)</p>
            <div className="flex items-center justify-between">
              <span className="text-sm">Combined Odds</span>
              <span className="font-bold">{formattedOdds}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-3">
          <div className="space-y-2">
            {betslip.map((selection) => (
              <div key={selection.id} className="flex justify-between items-center py-1 border-b last:border-0">
                <span className="text-sm">{selection.display}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6 rounded-full p-0"
                  onClick={() => {
                    const id = selection.id;
                    const display = selection.display;
                    const match = selection.match;
                    const odds = selection.odds;
                    toggleSelectionInBetSlip(id, display, match, odds);
                  }}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
            <div className="flex items-center space-x-2 pt-2">
              <span className="text-sm font-medium">Stake</span>
              <Input
                type="number"
                value={accaStake || ""}
                onChange={(e) => handleAccaStakeChange(e.target.value)}
                placeholder="£0.00"
                min="0.10"
                step="0.10"
                className="h-8 text-right"
              />
            </div>
            <div className="flex items-center justify-between mt-2 text-virginRed">
              <span className="text-sm font-medium">Returns</span>
              <span className="font-bold">{formatCurrency(returns)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderMultiplesTab = () => (
    <div className="p-4 flex flex-col items-center justify-center h-40">
      <p className="text-gray-500 text-center">
        Multiple bet types coming soon
      </p>
    </div>
  );

  const betSlipContent = (
    <div className="h-full flex flex-col">
      <SheetHeader className="px-4 py-2 border-b">
        <SheetTitle className="text-lg">Bet Slip ({betCount})</SheetTitle>
        {betCount > 0 && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearBetSlip}
            className="absolute right-4 top-4"
          >
            Clear All
          </Button>
        )}
      </SheetHeader>

      <div className="flex-1 overflow-y-auto p-4 pb-36">
        {betCount > 0 ? (
          <>
            <Tabs value={activeBetType} onValueChange={(value) => setActiveBetType(value as any)}>
              <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-0 h-12">
                <TabsTrigger 
                  value="single" 
                  className="rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-virginRed"
                >
                  Single
                </TabsTrigger>
                <TabsTrigger 
                  value="acca"
                  className="rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-virginRed"
                  disabled={betslip.length < 2}
                >
                  Acca
                </TabsTrigger>
                <TabsTrigger 
                  value="multiples"
                  className="rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-virginRed"
                  disabled={betslip.length < 2}
                >
                  Multiples
                </TabsTrigger>
              </TabsList>
              <div className="mt-4">
                <TabsContent value="single" className="m-0">
                  {renderSinglesTab()}
                </TabsContent>
                <TabsContent value="acca" className="m-0">
                  {renderAccaTab()}
                </TabsContent>
                <TabsContent value="multiples" className="m-0">
                  {renderMultiplesTab()}
                </TabsContent>
              </div>
            </Tabs>

            <div className="bg-gray-100 rounded-lg p-4 mt-6">
              <h3 className="font-medium mb-2 text-gray-700">Betting Tips</h3>
              <p className="text-sm text-gray-600">
                Singles are individual bets. Accumulators combine multiple selections for bigger potential returns, but all selections must win.
              </p>
            </div>
          </>
        ) : (
          <Card>
            <CardContent className="p-6 flex flex-col items-center justify-center h-48">
              <div className="text-center">
                <p className="text-gray-500 mb-3">No selections added yet</p>
                <p className="text-sm text-gray-400 mb-4">
                  Add selections to your bet slip by tapping on odds
                </p>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-virginRed hover:bg-virginRed/90 text-white"
                >
                  Browse Sports
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {betCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Total Stake</span>
            <span className="font-bold">{formatCurrency(totalStake)}</span>
          </div>
          <Button 
            className="w-full bg-virginRed hover:bg-virginRed/90"
            disabled={!hasValidStake}
          >
            Place Bet
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[90%] p-0 sm:max-w-full">
        {betSlipContent}
      </SheetContent>
    </Sheet>
  );
};

export default BetSlipSheet;
