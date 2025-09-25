import { BillboardForm } from "./components/billboard-form";

const BillboardsPage = async ({ params }: { params: Promise<{ billboardId: string }> }) => {
  const awaitedParams = await params;
  const billboard = await prisma?.billboard.findUnique({
    where: {
      id: awaitedParams.billboardId,
    },
  }) ?? null;

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardsPage;

