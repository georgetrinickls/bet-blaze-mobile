
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, CalendarDays, BadgeAlert } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export type PromotionStatus = "new" | "expiring" | "ongoing";
export type PromotionBetType = "Pre-Match" | "In-Play" | "Acca" | "Boosted Odds" | "Any";
export type PromotionActionType = "claim" | "view";

export interface PromotionCardProps {
  title: string;
  tagline?: string;
  category: string;
  valueProposition: string;
  betType: PromotionBetType;
  expiryDate: string; // ISO date string
  status?: PromotionStatus;
  imageSrc?: string;
  actionType?: PromotionActionType;
  onAction?: () => void;
}

export const PromotionCard = ({
  title,
  tagline,
  category,
  valueProposition,
  betType,
  expiryDate,
  status = "ongoing",
  imageSrc,
  actionType = "view",
  onAction,
}: PromotionCardProps) => {
  // Calculate days remaining until expiry
  const daysRemaining = () => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  // Status indicator components
  const getStatusIndicator = () => {
    switch (status) {
      case "new":
        return (
          <Badge className="absolute top-2 right-2 bg-green-500 text-white border-0 flex items-center gap-1">
            <BadgeAlert className="h-3 w-3" />
            NEW
          </Badge>
        );
      case "expiring":
        return (
          <Badge className="absolute top-2 right-2 bg-orange-500 text-white border-0 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            EXPIRING SOON
          </Badge>
        );
      case "ongoing":
        return (
          <Badge className="absolute top-2 right-2 bg-blue-500 text-white border-0 flex items-center gap-1">
            <CalendarDays className="h-3 w-3" />
            ONGOING
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700 shadow-lg h-full flex flex-col transition-transform hover:scale-[1.02] relative">
      {imageSrc && (
        <AspectRatio ratio={16/9} className="bg-gray-900">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      )}
      
      {getStatusIndicator()}
      
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Badge className="bg-virginRedNew text-white border-0">{category}</Badge>
          <Badge className="bg-gray-700 text-white border-0">{betType}</Badge>
        </div>
        <h3 className="font-bold text-lg text-white mt-2">{title}</h3>
        
        {tagline && (
          <p className="text-gray-300 text-sm mt-1 line-clamp-2">
            {tagline.length > 50 ? tagline.substring(0, 47) + '...' : tagline}
          </p>
        )}
        
        <div className="mt-3 p-2 bg-gray-700 rounded-md">
          <p className="text-white text-sm">{valueProposition}</p>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 flex justify-between items-center bg-gray-900">
        <div className="flex items-center text-gray-300 text-sm">
          <Clock className="h-4 w-4 mr-1" />
          <span>{daysRemaining()} days left</span>
        </div>
        <Button 
          variant="outline" 
          className="text-white border-gray-600 hover:bg-virginRedNew hover:text-white"
          onClick={onAction}
        >
          {actionType === "claim" ? "Claim Now" : "View Details"}
        </Button>
      </CardFooter>
    </Card>
  );
};
