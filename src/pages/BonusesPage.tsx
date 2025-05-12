import { AppLayout } from "@/components/layout/AppLayout";

const BonusesPage = () => {
  return (
    <AppLayout title="Bonuses">
      <div className="p-4">
        <h1 className="text-xl font-bold">Bonuses</h1>
        <p>You currently have no active bonuses.</p>
      </div>
    </AppLayout>
  );
};

export default BonusesPage;
