import prismadb from "@/lib/prismadb";

interface DashboardLayoutProps {
    params: { storeId: string };
};

const DashboardPage: React.FC<DashboardLayoutProps> = async ({ params }) => {

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
        },
    });
    return (
        <div>
            Activate Store: {store?.name}
        </div>
    );
};

export default DashboardPage;