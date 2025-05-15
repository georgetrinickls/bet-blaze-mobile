
export interface BetDetail {
  selection: string;
  event: string;
  odds: string;
}

export interface Bet {
  id: string;
  date: string;
  type: string;
  stake: string;
  returns: string;
  status: "Won" | "Lost" | "Open";
  details: BetDetail[];
}

export interface Match {
  id?: string;
  sport?: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  date: string;
  broadcast: string;
  homeOdds: string;
  drawOdds: string;
  awayOdds: string;
}
