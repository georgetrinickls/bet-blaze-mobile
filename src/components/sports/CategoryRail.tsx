
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Tv, Clock, Flag, Video } from "lucide-react";
import { cn } from "@/lib/utils";

export const CategoryRail = () => {
  const [activeCategory, setActiveCategory] = React.useState("streaming");

  const categories = [
    { id: "streaming", name: "Streaming", icon: Tv },
    { id: "upcoming", name: "Upcoming", icon: Clock },
    { id: "uk", name: "UK", icon: Flag },
    { id: "elite-euro", name: "Elite Euro", icon: Flag },
    { id: "televised", name: "Televised", icon: Video },
  ];

  return (
    <div className="mb-6">
      <ScrollArea className="w-full" orientation="horizontal">
        <div className="flex space-x-2 pb-2">
          {categories.map((category) => {
            const isActive = category.id === activeCategory;
            const Icon = category.icon;
            
            return (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap",
                  isActive 
                    ? "bg-[#303F6B] text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                variant="ghost"
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};
