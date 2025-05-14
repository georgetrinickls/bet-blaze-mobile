import React from "react";

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
  return (
    <div className="w-[320px] p-3 rounded-xl shadow border border-gray-200 bg-white space-y-4 flex-shrink-0">
      {/* Header Row */}
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 flex items-center justify-center">
            {/* Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#00E5C4" />
              <path
                d="M9.97587 15.099L8.73083 11.2531L12.0001 8.87646L15.2689 11.2531L14.0239 15.099H9.97587Z"
                stroke="#111"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7.11133V8.87654"
                stroke="#111"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-sm font-bold text-black">PRICE BOOST</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-600 font-semibold">
          <div className="bg-gray-100 px-2 py-1 rounded-full">£1 max</div>
          <div className="bg-gray-100 px-2 py-1 rounded-full">🔥 {bets} bets</div>
        </div>
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

      {/* Odds Box */}
      <div className="border border-gray-300 rounded-lg px-4 py-2 flex justify-center items-center space-x-2 text-sm font-semibold">
        <span className="line-through text-gray-400">{oldOdds}</span>
        <span className="text-[#00E5C4] font-bold">{newOdds}</span>
        <span className="text-[#00E5C4] text-lg leading-none">⬆</span>
      </div>
    </div>
  );
};

export default PriceBoost;
