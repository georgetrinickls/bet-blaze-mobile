import React from 'react';

const BalanceButton: React.FC = () => {
  return (
    <div className="flex items-center rounded-full bg-white border border-gray-300 px-3 py-1 space-x-2 w-fit shadow-sm">
      <span className="text-sm font-semibold text-black">£125.99</span>
      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
        <span className="text-xs text-gray-600">👤</span>
      </div>
    </div>
  );
};

export default BalanceButton;
