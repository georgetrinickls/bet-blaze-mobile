
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BalanceButton: React.FC = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/account');
  };
  
  return (
    <div 
      onClick={handleClick}
      className="flex items-center rounded-full bg-white border border-gray-300 pl-3 pr-1 py-1 space-x-2 w-fit shadow-sm cursor-pointer hover:bg-gray-100 transition-colors"
    >
      <span className="text-sm font-semibold text-black">£125.99</span>
      <div className="w-6 h-6 rounded-full flex items-center justify-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 9.68424V9.26318C11.6805 9.26318 16 11.0576 16 13.6138V16H0V13.6138C0 11.0576 4.31953 9.26318 8 9.26318V9.68424Z"
            fill="#9B9B9B"
          />
          <path
            d="M12.2101 4.21053C12.2101 6.53586 10.3249 8.42105 7.99978 8.42105C5.67435 8.42105 3.78906 6.53593 3.78906 4.21053C3.78906 1.88512 5.67435 0 7.99978 0C10.3249 0 12.2101 1.88519 12.2101 4.21053Z"
            fill="#9B9B9B"
          />
        </svg>
      </div>
    </div>
  );
};

export default BalanceButton;
