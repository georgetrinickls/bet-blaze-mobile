
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Star, ChevronRight } from "lucide-react";

export const LeaguesCompetitions = () => {
  const favorites = [
    { id: 1, name: "Premier League", country: "England", betBuilderCount: 45, isFavorite: true },
    { id: 2, name: "La Liga", country: "Spain", betBuilderCount: 32, isFavorite: true },
  ];
  
  const featured = [
    { id: 3, name: "Champions League", country: "Europe", betBuilderCount: 56, isFavorite: false },
    { id: 4, name: "Bundesliga", country: "Germany", betBuilderCount: 28, isFavorite: false },
    { id: 5, name: "Serie A", country: "Italy", betBuilderCount: 30, isFavorite: false },
    { id: 6, name: "Ligue 1", country: "France", betBuilderCount: 25, isFavorite: false },
    { id: 7, name: "Eredivisie", country: "Netherlands", betBuilderCount: 18, isFavorite: false },
  ];

  const LeagueRow = ({ league }: { league: typeof featured[0] }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-200">
      <div className="flex items-center">
        <img 
          src={`/icons/flags/${league.country.toLowerCase()}.png`} 
          alt={league.country}
          className="w-5 h-5 mr-3 rounded-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder.svg';
          }}
        />
        <div>
          <div className="font-medium">{league.name}</div>
          <div className="text-xs text-gray-500">{league.country}</div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-3">
          <span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded">
            BB {league.betBuilderCount}
          </span>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );

  return (
    <div>
      {favorites.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3 flex items-center">
            <Star className="w-4 h-4 mr-1 fill-yellow-400 stroke-yellow-400" />
            Favourited
          </h2>
          <div className="bg-white rounded-lg overflow-hidden">
            {favorites.map(league => (
              <LeagueRow key={league.id} league={league} />
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-lg font-bold mb-3">Featured</h2>
        <div className="bg-white rounded-lg overflow-hidden">
          {featured.map(league => (
            <LeagueRow key={league.id} league={league} />
          ))}
        </div>
      </div>
    </div>
  );
};
