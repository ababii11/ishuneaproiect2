import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import { Store } from "lucide-react";
import StoreSwitcher from "./store-switcher";

// Example: Replace with your actual stores data
const stores = []; // You should fetch or pass the real stores array here

const Navbar = () => {
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
}

export default Navbar;