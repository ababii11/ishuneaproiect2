import React from "react";
import { format } from "date-fns";
import { BillboardClient } from "./components/client";
import prisma from "@/lib/prismadb";
import { BillboardColumn } from "./components/columns";

const BillboardsPage = async ({
  params,
}: {
  params: Promise<{ storeId: string }>;
}) => {
  const { storeId } = await params;  // await aici

  const billboards = await prisma.billboard.findMany({
    where: { storeId },  // folosim storeId după await
    orderBy: { createdAt: "desc" },
  });

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
