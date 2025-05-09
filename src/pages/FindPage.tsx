
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

const FindPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const sportsList = [
    "American Football", "Athletics", "Aussie Rules",
    "Baseball", "Basketball", "Boxing",
    "Cricket", "Cycling", "Darts",
    "Football", "Formula 1", "Gaelic Games",
    "Golf", "Greyhounds", "Handball",
    "Horse Racing", "Ice Hockey", "MMA/UFC",
    "Motor Sports", "Olympics", "Politics",
    "Rugby League", "Rugby Union", "Snooker",
    "Table Tennis", "Tennis", "Volleyball",
    "Winter Sports"
  ];
  
  const filteredSports = sportsList.filter(sport => 
    sport.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppLayout title="A-Z Find">
      <div className="p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search sports and events"
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 gap-2">
          {filteredSports.map((sport) => (
            <Card key={sport}>
              <CardContent className="p-3 flex items-center justify-between">
                <p className="text-sm">{sport}</p>
                <p className="text-virginRed text-sm">▶</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default FindPage;
