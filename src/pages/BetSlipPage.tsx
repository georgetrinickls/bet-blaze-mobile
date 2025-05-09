
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BetSlipPage = () => {
  return (
    <AppLayout title="Bet Slip">
      <div className="p-4 space-y-4">
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
        
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="font-medium mb-2 text-gray-700">Betting Tips</h3>
          <p className="text-sm text-gray-600">
            When you add selections, you can place single bets or combine them into multiples
            for bigger potential returns.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default BetSlipPage;
