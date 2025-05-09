
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Circle, Activity, PenTool, TimerOff, Swords } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FindPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Featured sports
  const featuredSports = [
    { name: "Football", icon: Swords },
    { name: "Horse Racing", icon: TimerOff },
    { name: "Tennis", icon: Circle },
    { name: "Greyhounds", icon: PenTool },
    { name: "Virtual Sports", icon: Swords },
    { name: "E-Soccer", icon: Swords },
  ];
  
  // Top sports with icons
  const topSports = [
    { name: "In-play", icon: Circle, badge: "76", badgeColor: "bg-virginRed" },
    { name: "UK", icon: Swords, badge: "" },
    { name: "Elite Euro", icon: Swords, badge: "" },
    { name: "Cricket", icon: Swords, badge: "" },
    { name: "Racing Specials", icon: TimerOff, badge: "" },
    { name: "ATP & WTA", icon: Circle, badge: "" },
  ];
  
  const sportsList = [
    "American Football", "Athletics", "Aussie Rules",
    "Baseball", "Basketball", "Boxing",
    "Cycling", "Darts",
    "Formula 1", "Gaelic Games",
    "Golf", "Handball",
    "Ice Hockey", "MMA/UFC",
    "Motor Sports", "Olympics", "Politics",
    "Rugby League", "Rugby Union", "Snooker",
    "Table Tennis", "Volleyball",
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
        
        {/* Top Sports Grid */}
        <div className="grid grid-cols-3 gap-2">
          {topSports.map((sport) => (
            <Card key={sport.name} className="relative">
              <CardContent className="p-4 flex flex-col items-center justify-center h-24">
                <sport.icon className="h-6 w-6 mb-2 text-virginRed" />
                <p className="text-sm font-medium text-center">{sport.name}</p>
                {sport.badge && (
                  <Badge className={`absolute top-2 right-2 ${sport.badgeColor}`}>
                    {sport.badge}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Featured Section */}
        <div className="mt-6">
          <h2 className="font-bold text-lg mb-3">Featured</h2>
          <div className="grid grid-cols-1 gap-2">
            {featuredSports.map((sport) => (
              <Card key={sport.name}>
                <CardContent className="p-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <sport.icon className="h-5 w-5 mr-3 text-virginRed" />
                    <p className="text-sm">{sport.name}</p>
                  </div>
                  <p className="text-virginRed text-sm">▶</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* A-Z Sports List */}
        {searchTerm && (
          <div className="mt-4">
            <h2 className="font-bold text-lg mb-2">All Sports</h2>
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
        )}
      </div>
    </AppLayout>
  );
};

export default FindPage;
