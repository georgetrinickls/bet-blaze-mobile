
import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { FixturesList } from "@/components/bets/FixturesList";
import { fixtures } from "@/data/fixtures";

const SportPage = () => {
  const { sport } = useParams<{ sport: string }>();
  
  // Format the sport name for display
  const formatSportName = (sportSlug: string) => {
    return sportSlug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const displayName = sport ? formatSportName(sport) : "";
  
  // In a real app, you would filter fixtures based on the sport
  // For now, we'll just use all fixtures as a demo
  
  return (
    <AppLayout title={displayName}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">{displayName}</h1>
        <FixturesList fixtures={fixtures} />
      </div>
    </AppLayout>
  );
};

export default SportPage;
