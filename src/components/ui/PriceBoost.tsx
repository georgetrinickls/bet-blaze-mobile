
import React from "react";
import { useBetSlip } from "@/context/BetSlipContext";

interface PriceBoostProps {
  match: string;
  selections: string[];
  oldOdds: string;
  newOdds: string;
  bets: number;
}

const PriceBoost: React.FC<PriceBoostProps> = ({
  match,
  selections,
  oldOdds,
  newOdds,
  bets,
}) => {
  // Add bet slip context
  const { toggleSelectionInBetSlip, isSelectionInBetslip } = useBetSlip();

  // Create a unique ID for this price boost
  const boostId = `boost-${match}-${newOdds}`.replace(/\s+/g, '-');
  
  // Create a display string for the bet slip
  const displayText = selections.join(" & ");
  
  // Check if this selection is in the bet slip
  const isSelected = isSelectionInBetslip(boostId);

  // Handle click on the odds button
  const handleOddsClick = () => {
    toggleSelectionInBetSlip(boostId, displayText, match, newOdds);
  };

  return (
    <div className="w-[320px] p-3 rounded-xl shadow border border-gray-200 bg-white space-y-4 flex-shrink-0">
      {/* PRICE BOOST Banner */}
      <div className="w-full">
        <img
          src="/icons/Streamline/priceboost.svg"
          alt="Price Boost"
          className="w-full h-6 object-contain"
        />
      </div>

      {/* Match Title */}
      <div className="flex justify-between items-center text-sm font-medium text-black">
        <span>{match}</span>
        <span className="text-gray-400">&gt;</span>
      </div>

      {/* Selections */}
      <div className="space-y-1 text-sm">
        {selections.map((line, index) => (
          <div key={index} className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-[#00E5C4] rounded-full mt-1" />
            <span className="text-black">
              {line.split(" ")[0]} <span className="text-gray-400">{line.replace(line.split(" ")[0], "").trim()}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Odds Box - Now interactive */}
      <button 
        className={`w-full border ${isSelected ? 'border-virginRed bg-virginRed/5' : 'border-gray-300'} rounded-lg px-4 py-2 flex justify-center items-center space-x-2 text-sm font-semibold transition-colors hover:bg-gray-50 active:bg-gray-100`}
        onClick={handleOddsClick}
      >
        <span className="line-through text-gray-400">{oldOdds}</span>
        <span className="text-[#000000] font-bold">{newOdds}</span>
        <img
          src="/icons/Streamline/pbchevron.svg"
          alt="Boost Up"
          className="w-4 h-4"
        />
      </button>
    </div>
  );
};

export default PriceBoost;
