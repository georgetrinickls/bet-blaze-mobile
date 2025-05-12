import { AppLayout } from "@/components/layout/AppLayout";

const BonusesPage = () => {
  return (
    <AppLayout title="Bonuses">
      <div className="p-4">
        <h1 className="text-lg font-semibold mb-2">Bonuses</h1>
        <p className="text-sm text-gray-600">You currently have no active bonuses.</p>
      </div>
    </AppLayout>
  );
};

export default BonusesPage;
