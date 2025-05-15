
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PopularBetBuilders = () => {
  const betBuilders = [
    {
      id: 1,
      title: "Man City vs Arsenal",
      description: "Haaland to score + Over 2.5 goals + Both teams to score",
      odds: "4.50",
    },
    {
      id: 2,
      title: "Liverpool vs Chelsea",
      description: "Salah to score + Liverpool to win + Over 9 corners",
      odds: "5.25",
    },
    {
      id: 3,
      title: "Tottenham vs Everton",
      description: "Son to score + Tottenham to win + Under 3 cards",
      odds: "4.00",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-4">Popular Bet Builders</h2>
      <div className="grid grid-cols-1 gap-4">
        {betBuilders.map((betBuilder) => (
          <Card key={betBuilder.id} className="bg-white">
            <CardContent className="p-4">
              <div className="flex flex-col space-y-3">
                <h3 className="font-bold">{betBuilder.title}</h3>
                <p className="text-sm text-gray-600">{betBuilder.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">{betBuilder.odds}</span>
                  <Button className="bg-virginRedNew hover:bg-virginRedNew/90">Add</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
