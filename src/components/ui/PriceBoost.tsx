import React from 'react';

const PriceBoost: React.FC = () => {
  return (
    <div className="w-[320px] p-3 rounded-xl shadow border border-gray-200 bg-white space-y-3">
      {/* Header */}
      <div className="flex items-center">
        <svg
          width="296"
          height="24"
          viewBox="0 0 296 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 4C0 1.79086 1.79086 0 4 0H24V24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#00E5C4" />
          <g>
            <path
              d="M12 4.6665C10.5496 4.6665 9.13174 5.0966 7.92578 5.90239C6.71982 6.70819 5.77989 7.8535 5.22485 9.19349C4.6698 10.5335 4.52458 12.008 4.80754 13.4305C5.0905 14.853 5.78893 16.1597 6.81451 17.1853C7.8401 18.2109 9.14677 18.9093 10.5693 19.1923C11.9918 19.4752 13.4663 19.33 14.8063 18.7749C16.1463 18.2199 17.2916 17.28 18.0974 16.074C18.9032 14.8681 19.3333 13.4502 19.3333 11.9998C19.3333 11.0368 19.1436 10.0832 18.7751 9.19349C18.4065 8.30377 17.8664 7.49535 17.1854 6.81439C16.5044 6.13342 15.696 5.59325 14.8063 5.22472C13.9166 4.85619 12.963 4.6665 12 4.6665Z"
              stroke="#111111"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.97587 15.099L8.73083 11.2531L11.9999 8.87646L15.2689 11.2531L14.0239 15.099H9.97587Z"
              stroke="#111111"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        <span className="ml-2 font-bold text-sm text-black">PRICE BOOST</span>
      </div>

      {/* Match Info */}
      <div className="flex justify-between items-center text-sm font-medium text-black">
        <span>England vs Argentina</span>
        <span className="text-gray-500">{'>'}</span>
      </div>

      {/* Selections */}
      <div className="space-y-1 text-sm">
        <div>
          <span className="text-[#00E5C4]">● </span>
          England <span className="text-gray-400">To Win To Nil</span>
        </div>
        <div>
          <span className="text-[#00E5C4]">● </span>
          Harry Kane <span className="text-gray-400">To Score Or Assist</span>
        </div>
      </div>

      {/* Odds Button */}
      <div className="border border-gray-300 rounded-lg px-4 py-2 flex justify-center items-center space-x-2 text-sm font-semibold">
        <span className="line-through text-gray-400">11/5</span>
        <span className="text-[#00E5C4] font-bold">3/1</span>
        <span className="text-[#00E5C4] text-lg leading-none">⬆</span>
      </div>
    </div>
  );
};

export default PriceBoost;
