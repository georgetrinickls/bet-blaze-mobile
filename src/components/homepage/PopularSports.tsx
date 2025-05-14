import React from "react";
import StreamlineIcon from "@/components/ui/StreamlineIcon";

const sports = [
  { name: "Football", icon: "soccer-ball" },
  { name: "Horse Racing", icon: "horse-silhouette" },
  { name: "Tennis", icon: "tennis-ball" },
  { name: "Cricket", icon: "cricket-ball" },
];

const PopularSports = () => {
  return (
    <>
      <h2 className="font-bold text-lg pt-2">Popular</h2>
      <div className="overflow-x-auto no-scrollbar whitespace-nowrap flex space-x-4 pt-2 px-4">
        {sports.map((sport) => (
          <div
            key={sport.name}
            className="inline-flex flex-col items-center justify-center w-[100px] shrink-0 bg-white shadow-md rounded-xl px-4 py-3 text-sm font-medium text-center space-y-2"
          >
            <StreamlineIcon name={sport.icon} size={28} alt={sport.name} />
            <span>{sport.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularSports;
