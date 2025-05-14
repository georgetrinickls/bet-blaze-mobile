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
      {/* Styled PRICE BOOST Header */}
      <div className="flex items-center rounded-full overflow-hidden w-full h-8 bg-white shadow-sm">
        <div className="bg-[#00E5C4] w-8 h-8 flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="11" stroke="#111111" strokeWidth="2" />
            <path d="M4 8L12 12L20 8" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="bg-white flex-1 pl-2 pr-3">
          <span className="text-black font-bold italic uppercase text-sm tracking-tight">
            PRICE BOOST
          </span>
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
