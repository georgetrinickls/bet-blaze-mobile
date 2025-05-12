import { AppLayout } from "@/components/layout/AppLayout";

const HistoryPage = () => {
  return (
    <AppLayout title="History">
      <div className="p-4">
        <h1 className="text-xl font-bold">Bet History</h1>
        <p>You have no past bets.</p>
      </div>
    </AppLayout>
  );
};

export default HistoryPage;
