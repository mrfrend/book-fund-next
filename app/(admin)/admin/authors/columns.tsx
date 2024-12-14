"use client";
import { Author } from "@/interfaces";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";


export const columns: ColumnDef<Author>[] = [
  {
    accessorKey: "id",
    header: "ID",
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "first_name",
    header: "Имя",
  },
  {
    accessorKey: "last_name",
    header: "Фамилия",
  },
  {
    accessorKey: "middle_name",
    header: "Отчество",
  },
];
