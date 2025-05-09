import React, { useState, useEffect } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { MatchCard } from "@/components/football/MatchCard";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { BetBuilderCard } from "@/components/betbuilder/BetBuilderCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState("1X2");
  const [api, setApi] = useState<ReturnType<typeof useEmblaCarousel>[1]>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Carousel images
  const carouselImages = [
    "https://cdn.virginbet.com/headlines/images/vb-3kroulette-1105.jpg",
    "https://cdn.virginbet.com/headlines/images/vb-newweeklyaccaoffer.jpg",
    "https://cdn.virginbet.com/headlines/images/vb-2up.png",
  ];

  // Setup auto-rotation for carousel every 10 seconds
  useEffect(() => {
    if (!api) return;

    // Set initial count
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    // Update current slide when it changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Auto-rotate every 10 seconds
    const autoRotateInterval = setInterval(() => {
      api.scrollNext();
    }, 10000);

    // Clean up interval on unmount
    return () => clearInterval(autoRotateInterval);
  }, [api]);

  // Sample fixture data for the homepage
  const fixtures = [
    {
      homeTeam: "Bodø/Glimt",
      awayTeam: "Tottenham",
      time: "17:45",
      date: "Today",
      broadcast: "TNT Sports",
      homeOdds: "29/20",
      drawOdds: "14/5",
      awayOdds: "31/20",
    },
    {
      homeTeam: "Man United",
      awayTeam: "Athletic Bilbao",
      time: "20:00",
      date: "Today",
      broadcast: "TNT Sports",
      homeOdds: "10/11",
      drawOdds: "5/2",
      awayOdds: "14/5",
    },
    {
      homeTeam: "Real Madrid",
      awayTeam: "Napoli",
      time: "20:00",
      date: "Today",
      broadcast: "TNT Sports",
      homeOdds: "11/10",
      drawOdds: "13/5",
      awayOdds: "23/10",
    },
    {
      homeTeam: "Celtic",
      awayTeam: "Lazio",
      time: "20:00",
      date: "Today",
      broadcast: "TNT Sports",
      homeOdds: "2/1",
      drawOdds: "9/4",
      awayOdds: "5/4",
    },
    {
      homeTeam: "Bayern",
      awayTeam: "Arsenal",
      time: "20:00",
      date: "Today",
      broadcast: "TNT Sports",
      homeOdds: "17/20",
      drawOdds: "11/4",
      awayOdds: "3/1",
    },
    {
      homeTeam: "Roma",
      awayTeam: "Marseille",
      time: "17:45",
      date: "Today",
      broadcast: "TNT Sports",
      homeOdds: "5/4",
      drawOdds: "21/10",
      awayOdds: "9/5",
    },
  ];

  // Filter options
  const filterOptions = [
    "1X2",
    "BTTS",
    "Over/Under 1.5 Goals",
    "Over/Under 2.5 Goals"
  ];

  const handleFilterChange = (value: string) => {
    if (value) setActiveFilter(value);
  };

  // Bet Builder data
  const betBuilderData = {
    match: "Man Utd - Athletic Bilbao",
    options: [
      { category: "Market", selection: "Manchester United Full Time" },
      { category: "Both Teams to Score", selection: "Yes" },
      { category: "Goalscorers", selection: "Fernandes, Bruno (Anytime)" },
      { category: "Goalscorers", selection: "Sannadi, Maroan (Anytime)" }
    ],
    odds: "24/1"
  };

  return (
    <AppLayout title="Home">
      <div className="p-4 space-y-4">
        {/* Image Carousel - replaces the in-play and upcoming boxes */}
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={image}
                    alt={`Promotion ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-2">
            <CarouselPrevious className="static relative transform-none h-8 w-8" />
            <span className="text-xs text-muted-foreground">
              {current} / {count}
            </span>
            <CarouselNext className="static relative transform-none h-8 w-8" />
          </div>
        </Carousel>
        
        {/* Popular Bet Builder Card */}
        <BetBuilderCard 
          match={betBuilderData.match}
          options={betBuilderData.options}
          odds={betBuilderData.odds}
          onAddToBetslip={() => console.log("Added to betslip:", betBuilderData)}
        />
        
        <h2 className="font-bold text-lg pt-2">Today's Matches</h2>
        
        <div className="overflow-x-auto pb-2 no-scrollbar">
          <ToggleGroup 
            type="single" 
            value={activeFilter} 
            onValueChange={handleFilterChange}
            className="flex space-x-2"
          >
            {filterOptions.map((option) => (
              <ToggleGroupItem
                key={option}
                value={option}
                className="whitespace-nowrap rounded-full px-3 py-1 text-sm"
                variant="outline"
              >
                {activeFilter === option ? (
                  <Badge variant="default" className="bg-virginRed">
                    {option}
                  </Badge>
                ) : option}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        
        <div className="mb-4">
          {fixtures.map((fixture, index) => (
            <MatchCard
              key={index}
              homeTeam={fixture.homeTeam}
              awayTeam={fixture.awayTeam}
              time={fixture.time}
              date={fixture.date}
              broadcast={fixture.broadcast}
              homeOdds={fixture.homeOdds}
              drawOdds={fixture.drawOdds}
              awayOdds={fixture.awayOdds}
              onViewMore={() => console.log(`View more for ${fixture.homeTeam} vs ${fixture.awayTeam}`)}
            />
          ))}
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
