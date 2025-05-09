
import React, { createContext, useContext, useState } from "react";

interface BetSlipContextType {
  betCount: number;
  addToBetSlip: (bet: any) => void;
  clearBetSlip: () => void;
}

const BetSlipContext = createContext<BetSlipContextType | undefined>(undefined);

export const BetSlipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [betCount, setBetCount] = useState<number>(0);
  const [bets, setBets] = useState<any[]>([]);

  const addToBetSlip = (bet: any) => {
    setBets((prevBets) => [...prevBets, bet]);
    setBetCount((prevCount) => prevCount + 1);
  };

  const clearBetSlip = () => {
    setBets([]);
    setBetCount(0);
  };

  return (
    <BetSlipContext.Provider value={{ betCount, addToBetSlip, clearBetSlip }}>
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
