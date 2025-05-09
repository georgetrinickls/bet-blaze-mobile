
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bet } from "@/types/bet";

interface BetCardProps {
  bet: Bet;
}

export const BetCard: React.FC<BetCardProps> = ({ bet }) => {
  return (
    <Card>
      <CardHeader className="p-3 border-b">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">{bet.date}</p>
            <p className="text-xs font-medium">{bet.id}</p>
          </div>
          <div>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                bet.status === "Won"
                  ? "bg-green-100 text-green-800"
                  : bet.status === "Lost"
                  ? "bg-red-100 text-red-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {bet.status}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-3">
        <div className="space-y-2">
          {bet.details.map((detail, index) => (
            <div key={index} className="text-sm">
              <p className="font-medium">{detail.selection}</p>
              <p className="text-xs text-gray-500">{detail.event}</p>
              <div className="flex justify-between items-center">
                <p className="text-xs">Odds</p>
                <p className="text-xs font-medium">{detail.odds}</p>
              </div>
            </div>
          ))}
          <div className="border-t mt-2 pt-2">
            <div className="flex justify-between items-center">
              <p className="text-xs">Type</p>
              <p className="text-xs font-medium">{bet.type}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs">Stake</p>
              <p className="text-xs font-medium">{bet.stake}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs font-medium">Returns</p>
              <p className="text-xs font-bold">{bet.returns}</p>
            </div>
          </div>
          {bet.status === "Open" && (
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-2 text-xs border-virginRed text-virginRed hover:bg-virginRed/5"
            >
              Cash Out £18.50
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
