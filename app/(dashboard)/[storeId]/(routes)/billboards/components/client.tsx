"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Heading } from "@/components/heading";
import { Separator } from "@/components/ui/separator";

export const BillboardClient = () => {
const router = useRouter();
const params = useParams();


    return (
        <div className="p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <Heading 
                    title="Billboards (0)"
                    description="Manage billboards for your store"
                />
                <Button
  onClick={() => router.push(`/${params?.storeId}/billboards/new`)}
  className="w-full sm:w-auto flex gap-2 items-center"
>


                    <Plus className="h-4 w-4"/>
                    Add New
                </Button>
            </div>
            <Separator className="my-6"/>
            <div className="text-center text-muted-foreground mt-16 text-lg">
                No billboards found. Start by adding a new one!
            </div>
        </div>
    );
}