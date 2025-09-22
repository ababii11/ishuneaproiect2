"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import type { HTMLAttributes } from "react";

export function MainNav({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    const pathname = usePathname();
    const params = useParams() as { storeId?: string } | null;
    const storeId = params?.storeId as string | undefined;

    const routes = [
        {
            href: storeId ? `/${storeId}` : "/",
            label: "Overview",
            active: !!storeId && pathname === `/${storeId}`,
        },

 {
            href: storeId ? `/${storeId}/billboards` : "/",
            label: "Billboards",
            active: !!storeId && pathname === `/${storeId}/billboard`,
        },

        
        {
            href: storeId ? `/${storeId}/categories` : "/",
            label: "Categories",
            active: !!storeId && pathname === `/${storeId}/categories`,
        },

         {
      href: `/${params?.storeId}/sizes`,
      label: "Sizes",
      active: pathname === `/${params?.storeId}/sizes`,
    },

        {
            href: storeId ? `/${storeId}/settings` : "/",
            label: "Settings",
            active: !!storeId && pathname === `/${storeId}/settings`,
        },
    ];

    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        route.active ? "text-black dark:text-white" : "text-muted-foreground",
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}