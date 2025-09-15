"use client";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";
import { StoreModal } from "@/components/modals/store-modal";

const SetupPage = () => {
  const { onOpen, isOpen } = useStoreModal();

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <>
      <StoreModal />
      <div className="p-4">Root Page</div>
    </>
  );
};

export default SetupPage;

