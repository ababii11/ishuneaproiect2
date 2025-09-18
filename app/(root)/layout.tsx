import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/prismadb";
import Navbar from "@/components/navbar";
import { UserButton } from "@clerk/nextjs";
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
 return (
    <div className="border-b">
        <div className="flex h-16 items-center px-4">
            <div>This will be a store switcher</div>
            <div>
                This will be the routes
            </div>
            <div className="ml-auto flex items-center space-x-4"></div>
            <UserButton afterSignOutUrl="/"/>
        </div>
        </div>
);
};