
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export interface PromoCardProps {
  title: string;
  category: string;
  benefit: string;
  expiryDate: string; // ISO date string
  imageSrc?: string;
}

export const PromoCard = ({
  title,
  category,
  benefit,
  expiryDate,
  imageSrc,
}: PromoCardProps) => {
  // Calculate days remaining until expiry
  const daysRemaining = () => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700 shadow-lg h-full flex flex-col transition-transform hover:scale-[1.02]">
      {imageSrc && (
        <div className="h-32 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Badge className="bg-virginRedNew text-white border-0">{category}</Badge>
          <Badge className="bg-gray-700 text-white border-0">{benefit}</Badge>
        </div>
        <h3 className="font-bold text-lg text-white mt-2">{title}</h3>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center bg-gray-900">
        <div className="flex items-center text-gray-300 text-sm">
          <Clock className="h-4 w-4 mr-1" />
          <span>{daysRemaining()} days left</span>
        </div>
        <Button 
          variant="outline" 
          className="text-white border-gray-600 hover:bg-virginRedNew hover:text-white"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};
