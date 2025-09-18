import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/prismadb";
import Navbar from "@/components/navbar";
import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import Link from "next/link";
import { cn } from "@/lib/utils";
import StoreSwitcher from "@/components/store-switcher";
export default async function SetupLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const { userId } = await auth();

    if (!userId) { 
        redirect("/sign-in");
    }

    const store = await prisma.store.findFirst({
        where: {
            userId
        }
    });

    if (store) {
    redirect(`/${store.id}`);
}
 const stores = await prisma.store.findMany({
    where: { userId }
});

return (
    <div className="border-b">
        <div className="flex h-16 items-center px-4">
            <StoreSwitcher items={stores} />
            <MainNav className="mx-6"/>
            <div className="ml-auto flex items-center space-x-4"></div>
            <UserButton afterSignOutUrl="/"/>
        </div>
    </div>
);
};