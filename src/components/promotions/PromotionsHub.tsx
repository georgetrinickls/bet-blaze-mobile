
import React, { useState } from "react";
import { PromoCard, PromoCardProps } from "./PromoCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Sample promotions data
const PROMOTIONS: (PromoCardProps & { id: string; type: string })[] = [
  {
    id: "1",
    title: "Bet £10 Get £20 Free Bets",
    category: "Football",
    benefit: "Free Bet",
    expiryDate: "2025-06-30",
    type: "sports",
    imageSrc: "https://source.unsplash.com/random/400x200/?football"
  },
  {
    id: "2",
    title: "Double Odds on First Goalscorer",
    category: "Premier League",
    benefit: "Enhanced Odds",
    expiryDate: "2025-06-01",
    type: "sports",
    imageSrc: "https://source.unsplash.com/random/400x200/?soccer"
  },
  {
    id: "3",
    title: "Horse Racing Money Back Special",
    category: "Racing",
    benefit: "Money Back",
    expiryDate: "2025-06-15",
    type: "sports",
    imageSrc: "https://source.unsplash.com/random/400x200/?horseracing"
  },
  {
    id: "4",
    title: "100 Free Spins on Starburst",
    category: "Slots",
    benefit: "Free Spins",
    expiryDate: "2025-05-30",
    type: "casino",
    imageSrc: "https://source.unsplash.com/random/400x200/?slots"
  },
  {
    id: "5",
    title: "£50 Live Casino Welcome Bonus",
    category: "Live Casino",
    benefit: "Bonus Cash",
    expiryDate: "2025-06-20",
    type: "casino",
    imageSrc: "https://source.unsplash.com/random/400x200/?casino"
  },
  {
    id: "6",
    title: "Monday Free Bet Club",
    category: "All Sports",
    benefit: "Weekly Offer",
    expiryDate: "2025-07-01",
    type: "daily",
    imageSrc: "https://source.unsplash.com/random/400x200/?betting"
  },
  {
    id: "7",
    title: "Tuesday Booster: Deposit £10 Get £10",
    category: "Casino",
    benefit: "Deposit Bonus",
    expiryDate: "2025-07-02",
    type: "daily",
    imageSrc: "https://source.unsplash.com/random/400x200/?poker"
  }
];

export const PromotionsHub = () => {
  const [promoFilter, setPromoFilter] = useState<string>("all");
  
  // Filter promotions based on selected tab
  const filteredPromos = promoFilter === "all" 
    ? PROMOTIONS 
    : PROMOTIONS.filter(promo => promo.type === promoFilter);

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
                <PromoCard
                  key={promo.id}
                  title={promo.title}
                  category={promo.category}
                  benefit={promo.benefit}
                  expiryDate={promo.expiryDate}
                  imageSrc={promo.imageSrc}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sports" className="mt-4">
            <div className="grid grid-cols-1 gap-4">
              {filteredPromos.map((promo) => (
                <PromoCard
                  key={promo.id}
                  title={promo.title}
                  category={promo.category}
                  benefit={promo.benefit}
                  expiryDate={promo.expiryDate}
                  imageSrc={promo.imageSrc}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="casino" className="mt-4">
            <div className="grid grid-cols-1 gap-4">
              {filteredPromos.map((promo) => (
                <PromoCard
                  key={promo.id}
                  title={promo.title}
                  category={promo.category}
                  benefit={promo.benefit}
                  expiryDate={promo.expiryDate}
                  imageSrc={promo.imageSrc}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="daily" className="mt-4">
            <div className="grid grid-cols-1 gap-4">
              {filteredPromos.map((promo) => (
                <PromoCard
                  key={promo.id}
                  title={promo.title}
                  category={promo.category}
                  benefit={promo.benefit}
                  expiryDate={promo.expiryDate}
                  imageSrc={promo.imageSrc}
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
