"use client";
import {Genre } from "@/interfaces";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Genre>();
export const columns = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("name", {
    header: "Название",
  }),
];
