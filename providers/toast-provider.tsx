"use client";

import { Toaster } from "react-hot-toast";
import { PrismaClient } from "@prisma/client";

export const ToastProvider = () => {
    return <Toaster/>;
};