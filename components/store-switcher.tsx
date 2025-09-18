"use client";
import { useState } from "react";
import { Store } from "@prisma/client";
import { PopoverTrigger, Popover  } from "@/components/ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Store as StoreIcon } from "lucide-react";

interface StoreSwitcherProps {
    className?: string;
    items?: Store[];
}

export default function StoreSwitcher({ className, items = [] }: StoreSwitcherProps) {
    const storeModal = useStoreModal();
    const params = useParams() as { storeId?: string | string[] } | null;
    const router = useRouter();

    const formattedItems = items.map((item) => ({
        label: item.name,
        value: item.id,
    }));

    
    const rawStoreId = params?.storeId;
    const storeId = Array.isArray(rawStoreId) ? rawStoreId[0] : rawStoreId;
    const currentStore = formattedItems.find((item) => item.value === storeId);

    const [open, setOpen] = useState(false);

    const onStoreSelect = (store: { label: string; value: string }) => {
        setOpen(false);
        router.push(`/${store.value}`);
    };

    return (
       <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
        <button>
            <StoreIcon className="mr-2 h-4 w-4" />
        </button>
        </PopoverTrigger>
       </Popover>
    );
}
