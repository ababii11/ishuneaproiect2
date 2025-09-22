"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Heading } from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import { BillboardColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface BillboardClientProps {
  data: BillboardColumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Heading 
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />
        <Button
          onClick={() => router.push(`/${params?.storeId}/billboards/new`)}
          className="w-full sm:w-auto flex gap-2 items-center"
        >
          <Plus className="h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator className="my-6" />
      <DataTable searchKey='label' columns={columns} data={data} />

      {data.length === 0 ? (
        <div className="text-center text-muted-foreground mt-16 text-lg">
          No billboards found. Start by adding a new one!
        </div>
      ) : (

        <div>
          {data.map((billboard) => (
            <div key={billboard.id} className="border p-4 rounded mb-4">
              <h3 className="font-semibold">{billboard.label}</h3>
              {billboard.imageUrl && (
                <img src={billboard.imageUrl} alt={billboard.label} className="mt-2 w-full h-32 object-cover rounded" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
