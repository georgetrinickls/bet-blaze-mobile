import React from "react";

const PriceBoost: React.FC = () => {
  return (
    <div className="w-[320px] p-3 rounded-xl shadow border border-gray-200 bg-white space-y-4">
      {/* Header Row */}
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 flex items-center justify-center">
            {/* Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#00E5C4"/>
              <path d="M9.97587 15.099L8.73083 11.2531L12.0001 8.87646L15.2689 11.2531L14.0239 15.099H9.97587Z" stroke="#111" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 7.11133V8.87654" stroke="#111" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm font-bold text-black">PRICE BOOST</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-600 font-semibold">
          <div className="bg-gray-100 px-2 py-1 rounded-full">£1 max</div>
          <div className="bg-gray-100 px-2 py-1 rounded-full">🔥 120 bets</div>
        </div>
      </div>

      {/* Match Title */}
      <div className="flex justify-between items-center text-sm font-medium text-black">
        <span>England vs Argentina</span>
        <span className="text-gray-400">&gt;</span>
      </div>

      {/* Selections */}
      <div className="space-y-1 text-sm">
        <div className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-[#00E5C4] rounded-full mt-1" />
          <span className="text-black">England <span className="text-gray-400">To Win To Nil</span></span>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-[#00E5C4] rounded-full mt-1" />
          <span className="text-black">Harry Kane <span className="text-gray-400">To Score Or Assist</span></span>
        </div>
      </div>

      {/* Odds Box */}
      <div className="border border-gray-300 rounded-lg px-4 py-2 flex justify-center items-center space-x-2 text-sm font-semibold">
        <span className="line-through text-gray-400">11/5</span>
        <span className="text-[#00E5C4] font-bold">3/1</span>
        <span className="text-[#00E5C4] text-lg leading-none">⬆</span>
      </div>
    </div>
  );
};

exp
