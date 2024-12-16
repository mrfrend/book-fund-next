"use client";
import { Author } from "@/interfaces";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Author>();
export const columns = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("first_name", {
    header: "Имя",
  }),
  columnHelper.accessor("last_name", {
    header: "Фамилия",
  }),
  columnHelper.accessor("middle_name", {
    header: "Отчество",
  }),
];
