
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import { useBetSlip } from "@/context/BetSlipContext";
import { toast } from "sonner";

interface BetBuilderOption {
  category: string;
  selection: string;
}

interface BetBuilderCardProps {
  match: string;
  options: BetBuilderOption[];
  odds: string;
  onAddToBetslip?: () => void;
}

export const BetBuilderCard: React.FC<BetBuilderCardProps> = ({
  match,
  options,
  odds,
  onAddToBetslip,
}) => {
  const { addToBetSlip } = useBetSlip();

  const handleAddToBetslip = () => {
    const betData = {
      match,
      options,
      odds,
      timestamp: new Date().toISOString()
    };
    
    // Call the context method to update the bet count
    addToBetSlip(betData);
    
    // Call the original onAddToBetslip if provided
    if (onAddToBetslip) onAddToBetslip();
    
    // Show a toast notification
    toast.success("Selection added to betslip");
  };

  return (
    <Card className="mb-4 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-3 text-white">
        <h3 className="font-bold text-sm">Popular Bet Builder</h3>
      </div>
      
      <CardContent className="p-3 pt-4">
        <div className="mb-4">
          <p className="font-bold text-sm mb-3">{match}</p>
          
          <div className="space-y-2.5">
            {options.map((option, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">{option.category}</p>
                  <p className="text-sm font-medium">{option.selection}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-xs">
            <span className="text-gray-500">Odds</span>
            <p className="text-xl font-bold mt-1">{odds}</p>
          </div>
          
          <Button 
            onClick={handleAddToBetslip}
            className="bg-virginRed hover:bg-virginRed/90"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add to Betslip
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
