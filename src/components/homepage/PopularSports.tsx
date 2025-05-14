import React from "react";

const sports = ["Football", "Horse Racing", "Tennis", "Cricket"];

const PopularSports = () => {
  return (
    <>
      <h2 className="font-bold text-lg pt-2">Popular</h2>
      <div className="overflow-x-auto no-scrollbar whitespace-nowrap flex space-x-4 pt-2 px-4">
        {sports.map((sport) => (
          <div
            key={sport}
            className="inline-flex items-center justify-center w-[120px] shrink-0 bg-white shadow-md rounded-xl px-4 py-3 text-sm font-medium text-center"
          >
            {sport}
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularSports;
