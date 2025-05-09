
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const PopularSports = () => {
  return (
    <>
      <h2 className="font-bold text-lg pt-2">Popular</h2>
      <div className="grid grid-cols-1 gap-4">
        {["Football", "Horse Racing", "Tennis", "Cricket"].map((sport) => (
          <Card key={sport}>
            <CardContent className="p-4 flex items-center justify-between">
              <p>{sport}</p>
              <p className="text-virginRed">▶</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default PopularSports;
