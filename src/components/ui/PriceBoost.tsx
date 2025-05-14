import React from 'react';

const PriceBoost: React.FC = () => {
  return (
    <div className="w-[320px] p-3 rounded-xl shadow border border-gray-200 bg-white space-y-3">
      {/* Header SVG */}
      <div dangerouslySetInnerHTML={{ __html: `
        <svg fill="none" height="24" viewBox="0 0 296 24" width="296" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4C0 1.79086 1.79086 0 4 0H24V24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#00E5C4"/>
          <g clip-path="url(#clip0)">
            <path d="M12 4.6665C10.55..." stroke="#111111"/>
          </g>
        </svg>
      `}} />

      {/* Match Info */}
      <div className="flex justify-between items-center text-sm font-medium text-black">
        <span>England vs Argentina</span>
        <span className="text-gray-500">{'>'}</span>
      </div>

      {/* Bet Selections */}
      <div className="space-y-1 text-sm">
        <div className="text-black">
          <span className="text-[#00E5C4]">● </span>England <span className="text-gray-400">To Win To Nil</span>
        </div>
        <div className="text-black">
          <span className="text-[#00E5C4]">● </span>Harry Kane <span className="text-gray-400">To Score Or Assist</span>
        </div>
      </div>

      {/* Odds Button SVG */}
      <div dangerouslySetInnerHTML={{ __html: `
        <svg fill="none" height="40" viewBox="0 0 296 40" width="296" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <rect fill="#FCFCFC" height="39" rx="7.5" width="295" x="0.5" y="0.5"/>
            <rect height="39" rx="7.5" stroke="#D7D7D7" width="295" x="0.5" y="0.5"/>
            <text x="120" y="25" fill="#000000" font-size="14" font-weight="bold">11/5 <tspan fill="#00E5C4" font-weight="bold">3/1 ⬆</tspan></text>
          </g>
        </svg>
      `}} />
    </div>
  );
};

export default PriceBoost;
