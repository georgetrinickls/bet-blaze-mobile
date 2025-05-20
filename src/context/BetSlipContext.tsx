
import React, { createContext, useContext, useState } from "react";

interface BetSelection {
  id: string;
  display: string;
  odds: string;
  match: string;
  decimalOdds: number;
}

type BetType = "single" | "acca" | "multiples";

interface BetSlipContextType {
  betCount: number;
  betslip: BetSelection[];
  activeBetType: BetType;
  stakes: Record<string, number>;
  accaStake: number;
  addToBetSlip: (bet: any) => void;
  toggleSelectionInBetSlip: (id: string, displayText: string, match: string, odds: string) => void;
  clearBetSlip: () => void;
  isSelectionInBetslip: (id: string) => boolean;
  setActiveBetType: (type: BetType) => void;
  updateStake: (selectionId: string, stake: number) => void;
  updateAccaStake: (stake: number) => void;
  calculateReturns: (selectionId: string) => number;
  calculateAccaReturns: () => number;
  getTotalStakes: () => number;
  calculateTotalOdds: () => number;
}

const BetSlipContext = createContext<BetSlipContextType | undefined>(undefined);

// Helper to convert fractional odds to decimal
const convertToDecimal = (fractionalOdds: string): number => {
  if (!fractionalOdds.includes('/')) return parseFloat(fractionalOdds);
  
  const [numerator, denominator] = fractionalOdds.split('/').map(Number);
  return numerator / denominator + 1;
};

export const BetSlipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [betCount, setBetCount] = useState<number>(0);
  const [betslip, setBetslip] = useState<BetSelection[]>([]);
  const [activeBetType, setActiveBetType] = useState<BetType>("single");
  const [stakes, setStakes] = useState<Record<string, number>>({});
  const [accaStake, setAccaStake] = useState<number>(0);

  const addToBetSlip = (bet: any) => {
    setBets((prevBets) => [...prevBets, bet]);
    setBetCount((prevCount) => prevCount + 1);
  };

  const toggleSelectionInBetSlip = (id: string, displayText: string, match: string, odds: string) => {
    // Check if the selection is already in the betslip
    const existingIndex = betslip.findIndex(item => item.id === id);
    
    if (existingIndex >= 0) {
      // Remove the selection if it exists
      const newBetslip = betslip.filter(item => item.id !== id);
      setBetslip(newBetslip);
      setBetCount(newBetslip.length);
      
      // Remove the stake for this selection
      const newStakes = { ...stakes };
      delete newStakes[id];
      setStakes(newStakes);
    } else {
      // Add the selection if it doesn't exist
      const decimalOdds = convertToDecimal(odds);
      const newSelection = { 
        id, 
        display: displayText, 
        match,
        odds,
        decimalOdds
      };
      setBetslip(prev => [...prev, newSelection]);
      setBetCount(prev => prev + 1);
      
      // Initialize stake for this selection
      setStakes(prev => ({ ...prev, [id]: 0 }));
    }
  };

  const isSelectionInBetslip = (id: string) => {
    return betslip.some(item => item.id === id);
  };

  const clearBetSlip = () => {
    setBetslip([]);
    setBetCount(0);
    setStakes({});
    setAccaStake(0);
  };

  const updateStake = (selectionId: string, stake: number) => {
    setStakes(prev => ({ ...prev, [selectionId]: stake }));
  };

  const updateAccaStake = (stake: number) => {
    setAccaStake(stake);
  };

  const calculateReturns = (selectionId: string) => {
    const selection = betslip.find(item => item.id === selectionId);
    if (!selection) return 0;
    
    const stake = stakes[selectionId] || 0;
    return stake * selection.decimalOdds;
  };

  const calculateTotalOdds = () => {
    if (betslip.length === 0) return 0;
    
    return betslip.reduce((acc, curr) => acc * curr.decimalOdds, 1);
  };

  const calculateAccaReturns = () => {
    const totalOdds = calculateTotalOdds();
    return accaStake * totalOdds;
  };

  const getTotalStakes = () => {
    if (activeBetType === "acca") return accaStake;
    
    return Object.values(stakes).reduce((acc, curr) => acc + curr, 0);
  };

  return (
    <BetSlipContext.Provider value={{ 
      betCount, 
      betslip,
      activeBetType,
      stakes,
      accaStake,
      addToBetSlip, 
      toggleSelectionInBetSlip,
      clearBetSlip,
      isSelectionInBetslip,
      setActiveBetType,
      updateStake,
      updateAccaStake,
      calculateReturns,
      calculateAccaReturns,
      getTotalStakes,
      calculateTotalOdds
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
