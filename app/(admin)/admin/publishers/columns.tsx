"use client";
import {Publisher } from "@/interfaces";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Publisher>();
export const columns = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("name", {
    header: "Название",
  }),
];
