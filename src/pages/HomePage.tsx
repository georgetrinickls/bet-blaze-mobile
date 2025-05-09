
import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
  return (
    <AppLayout title="Home">
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center justify-center h-32 bg-gradient-to-r from-virginRed/80 to-virginRed text-white">
              <p className="text-lg font-bold">In-Play</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center justify-center h-32 bg-gradient-to-r from-gray-800 to-black text-white">
              <p className="text-lg font-bold">Upcoming</p>
            </CardContent>
          </Card>
        </div>
        
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
      </div>
    </AppLayout>
  );
};

export default HomePage;
