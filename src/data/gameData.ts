
// Casino game data with placeholder unsplash images
export const casinoGames = [
  {
    id: "mega-moolah",
    name: "Mega Moolah",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
    type: "Slot" as const,
    isPopular: true
  },
  {
    id: "starburst",
    name: "Starburst",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    type: "Slot" as const,
    isNew: true
  },
  {
    id: "book-of-dead",
    name: "Book of Dead",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=800&q=80",
    type: "Slot" as const
  },
  {
    id: "gonzo-quest",
    name: "Gonzo's Quest",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=80",
    type: "Slot" as const,
    isPopular: true
  },
  {
    id: "big-bass",
    name: "Big Bass",
    image: "https://images.unsplash.com/photo-1610295388717-7c72870f9845?w=800&q=80",
    type: "Slot" as const
  },
  {
    id: "immortal-romance",
    name: "Immortal Romance",
    image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=800&q=80", 
    type: "Slot" as const
  },
  {
    id: "blackjack-pro",
    name: "Blackjack Pro",
    image: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?w=800&q=80",
    type: "Table" as const,
    isPopular: true
  },
  {
    id: "european-roulette",
    name: "European Roulette",
    image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=800&q=80",
    type: "Table" as const
  },
  {
    id: "baccarat",
    name: "Baccarat",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&q=80", 
    type: "Table" as const
  },
  {
    id: "texas-holdem",
    name: "Texas Hold'em",
    image: "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&q=80",
    type: "Table" as const
  }
];

// Live casino game data with placeholder unsplash images
export const liveCasinoGames = [
  {
    id: "live-roulette",
    name: "Live Roulette",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&q=80",
    type: "Live" as const,
    isPopular: true
  },
  {
    id: "live-blackjack",
    name: "Live Blackjack",
    image: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?w=800&q=80",
    type: "Live" as const,
    isPopular: true
  },
  {
    id: "dream-catcher",
    name: "Dream Catcher",
    image: "https://images.unsplash.com/photo-1634501980455-9808d58e3c83?w=800&q=80",
    type: "Game Show" as const
  },
  {
    id: "lightning-dice",
    name: "Lightning Dice",
    image: "https://images.unsplash.com/photo-1608547222657-d900a4f421f8?w=800&q=80",
    type: "Game Show" as const
  },
  {
    id: "football-studio",
    name: "Football Studio",
    image: "https://images.unsplash.com/photo-1631384352886-49599b16d378?w=800&q=80",
    type: "Live" as const,
    isNew: true
  },
  {
    id: "casino-holdem",
    name: "Casino Holdem",
    image: "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&q=80",
    type: "Live" as const
  },
  {
    id: "mega-wheel",
    name: "Mega Wheel",
    image: "https://images.unsplash.com/photo-1660164467661-8b4598df6cb7?w=800&q=80",
    type: "Game Show" as const,
    isNew: true
  },
  {
    id: "lightning-roulette",
    name: "Lightning Roulette",
    image: "https://images.unsplash.com/photo-1603909223429-0963505a7ca7?w=800&q=80",
    type: "Live" as const,
    isPopular: true
  },
  {
    id: "crazy-time",
    name: "Crazy Time", 
    image: "https://images.unsplash.com/photo-1634501980455-9808d58e3c83?w=800&q=80",
    type: "Game Show" as const
  },
  {
    id: "live-baccarat",
    name: "Live Baccarat",
    image: "https://images.unsplash.com/photo-1565060169194-19fabf63eba9?w=800&q=80",
    type: "Live" as const
  }
];

// Filter functions to simplify game filtering
export const filterGamesByType = (games: typeof casinoGames, type: string) => {
  if (type === "all") return games;
  return games.filter(game => game.type.toLowerCase() === type.toLowerCase());
};
