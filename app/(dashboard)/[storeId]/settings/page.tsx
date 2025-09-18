import prisma from "@/lib/prismadb";
import { SettingsForm } from "@/app/(root)/(roots)/settings/components/settings-form";

export default async function SettingsPage({ params }: { params: { storeId: string } }) {
    const store = await prisma.store.findUnique({ where: { id: params.storeId } });

    if (!store) {
        return null;
    }

    return (
        <div className="p-4">
            <SettingsForm initialData={store} />
        </div>
    );
}


