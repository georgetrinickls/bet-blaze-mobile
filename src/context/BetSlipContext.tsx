
import React, { createContext, useContext, useState } from "react";

interface BetSelection {
  id: string;
  display: string;
}

interface BetSlipContextType {
  betCount: number;
  betslip: BetSelection[];
  addToBetSlip: (bet: any) => void;
  toggleSelectionInBetSlip: (id: string, displayText: string) => void;
  clearBetSlip: () => void;
  isSelectionInBetslip: (id: string) => boolean;
}

const BetSlipContext = createContext<BetSlipContextType | undefined>(undefined);

export const BetSlipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [betCount, setBetCount] = useState<number>(0);
  const [bets, setBets] = useState<any[]>([]);
  const [betslip, setBetslip] = useState<BetSelection[]>([]);

  const addToBetSlip = (bet: any) => {
    setBets((prevBets) => [...prevBets, bet]);
    setBetCount((prevCount) => prevCount + 1);
  };

  const toggleSelectionInBetSlip = (id: string, displayText: string) => {
    // Check if the selection is already in the betslip
    const existingIndex = betslip.findIndex(item => item.id === id);
    
    if (existingIndex >= 0) {
      // Remove the selection if it exists
      const newBetslip = betslip.filter(item => item.id !== id);
      setBetslip(newBetslip);
      setBetCount(newBetslip.length);
    } else {
      // Add the selection if it doesn't exist
      const newSelection = { id, display: displayText };
      setBetslip(prev => [...prev, newSelection]);
      setBetCount(prev => prev + 1);
    }
  };

  const isSelectionInBetslip = (id: string) => {
    return betslip.some(item => item.id === id);
  };

  const clearBetSlip = () => {
    setBets([]);
    setBetslip([]);
    setBetCount(0);
  };

  return (
    <BetSlipContext.Provider value={{ 
      betCount, 
      betslip,
      addToBetSlip, 
      toggleSelectionInBetSlip,
      clearBetSlip,
      isSelectionInBetslip 
    }}>
      {children}
    </BetSlipContext.Provider>
  );
};

export const useBetSlip = () => {
  const context = useContext(BetSlipContext);
  if (context === undefined) {
    throw new Error("useBetSlip must be used within a BetSlipProvider");
  }
  return context;
};
