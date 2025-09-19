import { BillboardClient } from "./components/client";

const BillboardsPage = () => {
  return (
    <div className="flex-col">
        <div className = "flex items-center justify-between">
        <BillboardClient />
        </div>
    </div>
  );
};

export default BillboardsPage;
