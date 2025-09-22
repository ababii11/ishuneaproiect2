import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action"; // asigură-te că importul este corect

export interface BillboardColumn {
  id: string;
  label: string;
  imageUrl?: string | null;
  createdAt: string;
}

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => {
      const url = row.original.imageUrl;
      return url ? (
        <img src={url} alt={row.original.label} className="w-24 h-12 object-cover rounded" />
      ) : (
        <span>No image</span>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
