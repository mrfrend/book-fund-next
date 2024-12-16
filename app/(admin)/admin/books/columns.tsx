import {
  ColumnDef,
  ColumnHelper,
  createColumnHelper,
} from "@tanstack/react-table";
import { BookTableProps } from "@/interfaces";

const columnHelper = createColumnHelper<BookTableProps>();
export const columns = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("title", {
    header: "Название",
  }),
  columnHelper.accessor("page_amount", {
    header: "Количество страниц",
  }),
  columnHelper.accessor("year_creation", {
    header: "Год создания",
  }),
  columnHelper.accessor("year_published", {
    header: "Год публикации",
  }),
  columnHelper.accessor("quantity", {
    header: "Количество экземпляров",
  }),
  columnHelper.accessor("country_id", {
    header: "ID Страны",
  }),
  columnHelper.accessor("publisher_id", {
    header: "ID Издательства",
  }),
  columnHelper.accessor("isbn_number", {
    header: "ISBN",
  }),
];
