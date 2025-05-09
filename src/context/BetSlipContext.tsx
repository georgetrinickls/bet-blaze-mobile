
import React, { createContext, useContext, useState } from "react";

interface BetSlipContextType {
  betCount: number;
  betslip: string[];
  addToBetSlip: (bet: any) => void;
  addSelectionToBetSlip: (selection: string) => void;
  clearBetSlip: () => void;
  isSelectionInBetslip: (selection: string) => boolean;
}

const BetSlipContext = createContext<BetSlipContextType | undefined>(undefined);

export const BetSlipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [betCount, setBetCount] = useState<number>(0);
  const [bets, setBets] = useState<any[]>([]);
  const [betslip, setBetslip] = useState<string[]>([]);

  const addToBetSlip = (bet: any) => {
    setBets((prevBets) => [...prevBets, bet]);
    setBetCount((prevCount) => prevCount + 1);
  };

  const addSelectionToBetSlip = (selection: string) => {
    if (!betslip.includes(selection)) {
      setBetslip((prevSelections) => [...prevSelections, selection]);
      setBetCount((prevCount) => prevCount + 1);
    }
  };

  const isSelectionInBetslip = (selection: string) => {
    return betslip.includes(selection);
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
      addSelectionToBetSlip,
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
