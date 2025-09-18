"use client";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";
import { StoreModal } from "@/components/modals/store-modal";
import { Noto_Sans_Tamil_Supplement } from "next/font/google";

const SetupPage = () => {
  const { onOpen, isOpen } = useStoreModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};
export default SetupPage;

