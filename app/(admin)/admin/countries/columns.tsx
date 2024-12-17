"use client";
import {Country } from "@/interfaces";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Country>();
export const columns = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("name", {
    header: "Название",
  }),
];
