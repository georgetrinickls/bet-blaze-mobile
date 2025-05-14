
import React, { useState } from "react";
import { PromotionCard, PromotionCardProps } from "./PromotionCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Sample promotions data
const PROMOTIONS: (Omit<PromotionCardProps, 'onAction'> & { id: string; type: string })[] = [
  {
    id: "1",
    title: "Premier League Weekender",
    tagline: "Boost your PL bets this weekend",
    category: "Football",
    valueProposition: "Get paid if VAR rules it out after your team scores",
    betType: "Pre-Match",
    expiryDate: "2025-06-30",
    type: "sports",
    status: "new",
    imageSrc: "https://source.unsplash.com/random/400x200/?football"
  },
  {
    id: "2",
    title: "Double Odds on First Goalscorer",
    tagline: "Double your potential winnings on the first goal",
    category: "Premier League",
    valueProposition: "Get double odds on your First Goalscorer selection",
    betType: "Pre-Match",
    expiryDate: "2025-06-01",
    type: "sports",
    status: "ongoing",
    imageSrc: "https://source.unsplash.com/random/400x200/?soccer"
  },
  {
    id: "3",
    title: "Horse Racing Money Back Special",
    tagline: "Get your stake back if your horse places 2nd",
    category: "Racing",
    valueProposition: "Money back as a free bet if your selection finishes 2nd",
    betType: "Any",
    expiryDate: "2025-05-26",
    type: "sports",
    status: "expiring",
    imageSrc: "https://source.unsplash.com/random/400x200/?horseracing"
  },
  {
    id: "4",
    title: "100 Free Spins on Starburst",
    tagline: "Claim free spins on our most popular slot",
    category: "Slots",
    valueProposition: "Get 100 free spins when you deposit £20 or more",
    betType: "Any",
    expiryDate: "2025-05-30",
    type: "casino",
    status: "new",
    imageSrc: "https://source.unsplash.com/random/400x200/?slots",
    actionType: "claim"
  },
  {
    id: "5",
    title: "£50 Live Casino Welcome Bonus",
    tagline: "Start your live casino experience with extra cash",
    category: "Live Casino",
    valueProposition: "100% bonus up to £50 on your first deposit",
    betType: "Any",
    expiryDate: "2025-06-20",
    type: "casino",
    status: "ongoing",
    imageSrc: "https://source.unsplash.com/random/400x200/?casino"
  },
  {
    id: "6",
    title: "Monday Free Bet Club",
    tagline: "Start your week with a free bet",
    category: "All Sports",
    valueProposition: "Place £25 in bets and get a £5 free bet every Monday",
    betType: "Any",
    expiryDate: "2025-07-01",
    type: "daily",
    status: "ongoing",
    imageSrc: "https://source.unsplash.com/random/400x200/?betting"
  },
  {
    id: "7",
    title: "Tuesday Booster: Deposit £10 Get £10",
    tagline: "Double your money every Tuesday",
    category: "Casino",
    valueProposition: "Deposit £10, play with £20 every Tuesday",
    betType: "Any",
    expiryDate: "2025-05-25",
    type: "daily",
    status: "expiring",
    imageSrc: "https://source.unsplash.com/random/400x200/?poker",
    actionType: "claim"
  }
];

export const PromotionsHub = () => {
  const [promoFilter, setPromoFilter] = useState<string>("all");
  
  // Filter promotions based on selected tab
  const filteredPromos = promoFilter === "all" 
    ? PROMOTIONS 
    : PROMOTIONS.filter(promo => promo.type === promoFilter);

  const handleCardAction = (id: string) => {
    console.log(`Action clicked for promotion ${id}`);
    // Add action handling logic here
  };

  return (
    <div className="bg-gray-900 text-white rounded-xl pb-6">
      {/* Header Section */}
      <div className="bg-virginRedNew rounded-t-xl p-4 sm:p-5">
        <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Promotions Hub</h2>
        <p className="text-sm sm:text-base text-white/80">Discover exclusive offers and bonuses</p>
      </div>
      
      {/* Filter Tabs */}
      <div className="p-4">
        <Tabs defaultValue="all" onValueChange={setPromoFilter}>
          <TabsList className="grid grid-cols-4 bg-gray-800 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-virginRedNew data-[state=active]:text-white">
              All
            </TabsTrigger>
            <TabsTrigger value="sports" className="data-[state=active]:bg-virginRedNew data-[state=active]:text-white">
              Sports
            </TabsTrigger>
            <TabsTrigger value="casino" className="data-[state=active]:bg-virginRedNew data-[state=active]:text-white">
              Casino
            </TabsTrigger>
            <TabsTrigger value="daily" className="data-[state=active]:bg-virginRedNew data-[state=active]:text-white">
              Daily
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <div className="grid grid-cols-1 gap-4">
              {filteredPromos.map((promo) => (
                <PromotionCard
                  key={promo.id}
                  title={promo.title}
                  tagline={promo.tagline}
                  category={promo.category}
                  valueProposition={promo.valueProposition}
                  betType={promo.betType}
                  expiryDate={promo.expiryDate}
                  status={promo.status}
                  imageSrc={promo.imageSrc}
                  actionType={promo.actionType}
                  onAction={() => handleCardAction(promo.id)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sports" className="mt-4">
            <div className="grid grid-cols-1 gap-4">
              {filteredPromos.map((promo) => (
                <PromotionCard
                  key={promo.id}
                  title={promo.title}
                  tagline={promo.tagline}
                  category={promo.category}
                  valueProposition={promo.valueProposition}
                  betType={promo.betType}
                  expiryDate={promo.expiryDate}
                  status={promo.status}
                  imageSrc={promo.imageSrc}
                  actionType={promo.actionType}
                  onAction={() => handleCardAction(promo.id)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="casino" className="mt-4">
            <div className="grid grid-cols-1 gap-4">
              {filteredPromos.map((promo) => (
                <PromotionCard
                  key={promo.id}
                  title={promo.title}
                  tagline={promo.tagline}
                  category={promo.category}
                  valueProposition={promo.valueProposition}
                  betType={promo.betType}
                  expiryDate={promo.expiryDate}
                  status={promo.status}
                  imageSrc={promo.imageSrc}
                  actionType={promo.actionType}
                  onAction={() => handleCardAction(promo.id)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="daily" className="mt-4">
            <div className="grid grid-cols-1 gap-4">
              {filteredPromos.map((promo) => (
                <PromotionCard
                  key={promo.id}
                  title={promo.title}
                  tagline={promo.tagline}
                  category={promo.category}
                  valueProposition={promo.valueProposition}
                  betType={promo.betType}
                  expiryDate={promo.expiryDate}
                  status={promo.status}
                  imageSrc={promo.imageSrc}
                  actionType={promo.actionType}
                  onAction={() => handleCardAction(promo.id)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* View All Button */}
      <div className="px-4 mt-4">
        <Button className="w-full bg-white text-virginRedNew hover:bg-gray-100">
          Browse All Promotions
        </Button>
      </div>
    </div>
  );
};
