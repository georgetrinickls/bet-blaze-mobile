import { AppLayout } from "@/components/layout/AppLayout";
import { BetCard } from "@/components/bets/BetCard";
import { Bet } from "@/types/bet";

const HistoryPage = () => {
  const pastBets: Bet[] = [
    {
      id: "BET7654321",
      date: "Yesterday, 15:45",
      type: "Double",
      stake: "£5.00",
      returns: "£0.00",
      status: "Lost",
      details: [
        {
          selection: "Arsenal to win",
          event: "Arsenal vs Chelsea",
          odds: "2.10",
        },
        {
          selection: "Over 2.5 goals",
          event: "Tottenham vs Manchester City",
          odds: "1.80",
        },
      ],
    },
    {
      id: "BET1234567",
      date: "Today, 12:30",
      type: "Single",
      stake: "£10.00",
      returns: "£25.00",
      status: "Won",
      details: [
        {
          selection: "Liverpool to win",
          event: "Liverpool vs Manchester United",
          odds: "2.50",
        },
      ],
    },
  ];

  return (
    <AppLayout title="History">
      <div className="p-4 space-y-4">
        <h1 className="text-lg font-semibold mb-2">Bet History</h1>
        {pastBets.map((bet) => (
          <BetCard key={bet.id} bet={bet} />
        ))}
      </div>
    </AppLayout>
  );
};

export default HistoryPage;
