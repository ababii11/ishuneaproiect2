"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import type { Store as StoreModel } from "@prisma/client";
import StoreSwitcher from "./store-switcher";

type NavbarProps = {
    items?: StoreModel[];
};

const Navbar = ({ items = [] }: NavbarProps) => {
    const { user } = useUser();
    const userId = user?.id;

    if (!userId) {
        // You can't use redirect in client components, so show nothing or a message
        return null;
    }

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <StoreSwitcher items={items} />
                <MainNav className="mx-6"/>
                <div className="ml-auto flex items-center space-x-4"></div>
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    );
}

export default Navbar;