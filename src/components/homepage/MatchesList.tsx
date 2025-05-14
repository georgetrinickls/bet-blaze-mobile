import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MatchCard } from "@/components/football/MatchCard";
import { Match } from "@/types/bet";

interface MatchesListProps {
  fixtures: Match[];
}

const MatchesList = ({ fixtures }: MatchesListProps) => {
  const [activeFilter, setActiveFilter] = useState("Football");

  const filterOptions = [
    "Football",
    "Cricket",
    "Boxing",
    "Tennis",
    "Golf",
    "Horseracing",
    "Greyhounds",
    "Rugby Union"
  ];

  const handleFilterChange = (value: string) => {
    if (value) setActiveFilter(value);
  };

  return (
    <>
      <h2 className="font-bold text-lg mb-4">Today's Matches</h2>

      {/* Pill Rail */}
      <div className="overflow-x-auto pb-2 no-scrollbar text-left">
        <div className="w-max">
          <ToggleGroup
            type="single"
            value={activeFilter}
            onValueChange={handleFilterChange}
            className="inline-flex space-x-2"
          >
            {filterOptions.map((option) => (
              <ToggleGroupItem
                key={option}
                value={option}
                variant="outline"
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition-all duration-200 ease-in-out ${
                  activeFilter === option
                    ? "bg-[#303F6B] text-white border-transparent scale-105"
                    : "bg-white text-black"
                }`}
              >
                {option}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>

      {/* Match Cards */}
      <div className="mt-4 space-y-4">
        {fixtures
          .filter((match) => match.sport === activeFilter)
          .map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
      </div>
    </>
  );
};

export default MatchesList;
