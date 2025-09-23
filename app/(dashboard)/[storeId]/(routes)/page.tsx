import React from "react";
import prisma from "@/lib/prismadb";

interface DashboardPageProps {
  params: Promise<{ storeId: string }>;
}

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const { storeId } = await params;

  const store = await prisma.store.findFirst({
    where: {
      id: storeId,
    },
  });

  return (
    <div className="text-2xl font-bold">
      Active Store: {store?.name ? store.name : "Store not found"}
    </div>
  );
};

export default DashboardPage;
