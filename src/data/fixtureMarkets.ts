import { Match } from "@/types/bet";

export interface MarketSelection {
  id: string;
  name: string;
  odds: string;
  type: string;
}

export interface Market {
  id: string;
  name: string;
  description?: string;
  selections: MarketSelection[];
}

export interface MarketCategory {
  id: string;
  name: string;
  markets: Market[];
}

export interface FixtureDetail extends Match {
  marketCategories: MarketCategory[];
  priceBoosts: {
    match: string;
    selections: string[];
    oldOdds: string;
    newOdds: string;
    bets: number;
  }[];
}

// Sample data for a fixture
export const getFixtureDetails = (fixtureId: string): FixtureDetail | undefined => {
  const fixture = fixtureMarkets.find(f => f.id === fixtureId);
  return fixture;
};

export const fixtureMarkets: FixtureDetail[] = [
  {
    id: "match-1",
    sport: "Football",
    homeTeam: "Bodø/Glimt",
    awayTeam: "Tottenham",
    time: "17:45",
    date: "Today",
    broadcast: "TNT Sports",
    homeOdds: "29/20",
    drawOdds: "14/5",
    awayOdds: "31/20",
    priceBoosts: [
      {
        match: "Bodø/Glimt vs Tottenham",
        selections: ["Son to Score First", "Tottenham to Win"],
        oldOdds: "7/1",
        newOdds: "9/1",
        bets: 78,
      },
      {
        match: "Bodø/Glimt vs Tottenham",
        selections: ["Over 2.5 Goals", "Both Teams To Score"],
        oldOdds: "6/4",
        newOdds: "2/1",
        bets: 145,
      }
    ],
    marketCategories: [
      {
        id: "popular",
        name: "Popular",
        markets: [
          {
            id: "match-result",
            name: "Match Result",
            selections: [
              { id: "home", name: "Bodø/Glimt", odds: "29/20", type: "home" },
              { id: "draw", name: "Draw", odds: "14/5", type: "draw" },
              { id: "away", name: "Tottenham", odds: "31/20", type: "away" }
            ]
          },
          {
            id: "both-teams-to-score",
            name: "Both Teams To Score",
            selections: [
              { id: "btts-yes", name: "Yes", odds: "8/11", type: "btts" },
              { id: "btts-no", name: "No", odds: "11/10", type: "btts" }
            ]
          },
          {
            id: "over-under-25",
            name: "Over/Under 2.5 Goals",
            selections: [
              { id: "over-25", name: "Over 2.5", odds: "4/5", type: "goals" },
              { id: "under-25", name: "Under 2.5", odds: "11/10", type: "goals" }
            ]
          }
        ]
      },
      {
        id: "goals",
        name: "Goals",
        markets: [
          {
            id: "over-under-05",
            name: "Over/Under 0.5 Goals",
            selections: [
              { id: "over-05", name: "Over 0.5", odds: "1/16", type: "goals" },
              { id: "under-05", name: "Under 0.5", odds: "8/1", type: "goals" }
            ]
          },
          {
            id: "over-under-15",
            name: "Over/Under 1.5 Goals",
            selections: [
              { id: "over-15", name: "Over 1.5", odds: "2/9", type: "goals" },
              { id: "under-15", name: "Under 1.5", odds: "3/1", type: "goals" }
            ]
          },
          {
            id: "over-under-25",
            name: "Over/Under 2.5 Goals",
            selections: [
              { id: "over-25", name: "Over 2.5", odds: "4/5", type: "goals" },
              { id: "under-25", name: "Under 2.5", odds: "11/10", type: "goals" }
            ]
          },
          {
            id: "over-under-35",
            name: "Over/Under 3.5 Goals",
            selections: [
              { id: "over-35", name: "Over 3.5", odds: "7/4", type: "goals" },
              { id: "under-35", name: "Under 3.5", odds: "2/5", type: "goals" }
            ]
          }
        ]
      },
      {
        id: "corners",
        name: "Corners",
        markets: [
          {
            id: "total-corners",
            name: "Total Corners",
            selections: [
              { id: "under-8", name: "Under 8", odds: "3/1", type: "corners" },
              { id: "8-10", name: "8-10", odds: "11/10", type: "corners" },
              { id: "over-10", name: "Over 10", odds: "6/4", type: "corners" }
            ]
          }
        ]
      },
      {
        id: "cards",
        name: "Cards",
        markets: [
          {
            id: "total-cards",
            name: "Total Cards",
            selections: [
              { id: "under-3", name: "Under 3", odds: "3/1", type: "cards" },
              { id: "3-5", name: "3-5", odds: "6/5", type: "cards" },
              { id: "over-5", name: "Over 5", odds: "7/4", type: "cards" }
            ]
          }
        ]
      }
    ]
  },
  // More fixtures would be added here with their details
  {
    id: "match-2",
    sport: "Football",
    homeTeam: "Man United",
    awayTeam: "Athletic Bilbao",
    time: "20:00",
    date: "Today",
    broadcast: "TNT Sports",
    homeOdds: "10/11",
    drawOdds: "5/2",
    awayOdds: "14/5",
    priceBoosts: [
      {
        match: "Man United vs Athletic Bilbao",
        selections: ["Rashford to Score", "Man United to Win"],
        oldOdds: "3/1",
        newOdds: "4/1",
        bets: 152,
      }
    ],
    marketCategories: [
      {
        id: "popular",
        name: "Popular",
        markets: [
          {
            id: "match-result",
            name: "Match Result",
            selections: [
              { id: "home", name: "Man United", odds: "10/11", type: "home" },
              { id: "draw", name: "Draw", odds: "5/2", type: "draw" },
              { id: "away", name: "Athletic Bilbao", odds: "14/5", type: "away" }
            ]
          },
          {
            id: "both-teams-to-score",
            name: "Both Teams To Score",
            selections: [
              { id: "btts-yes", name: "Yes", odds: "4/6", type: "btts" },
              { id: "btts-no", name: "No", odds: "6/5", type: "btts" }
            ]
          }
        ]
      },
      // Other market categories would be defined similarly
      {
        id: "goals",
        name: "Goals",
        markets: [
          {
            id: "over-under-25",
            name: "Over/Under 2.5 Goals",
            selections: [
              { id: "over-25", name: "Over 2.5", odds: "8/11", type: "goals" },
              { id: "under-25", name: "Under 2.5", odds: "6/5", type: "goals" }
            ]
          }
        ]
      }
    ]
  }
];
