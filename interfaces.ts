import { HTMLAttributes } from "react";

import { CellContext } from "@tanstack/react-table";
export interface CheckboxProps {
  value: string;
  labelText: string;
  id: string;
}

export interface Author {
  id: number;
  first_name: string;
  last_name: string;
  middle_name?: string;
}

interface BaseInterface {
  id: number;
  name: string;
}

export interface Catalog extends BaseInterface {}
export interface Country extends BaseInterface {}
export interface Publisher extends BaseInterface {}
export interface Genre extends BaseInterface {}

export interface CheckboxGroupProps {
  title: string;
  name: string;
  checkboxes: CheckboxProps[];
  checkboxStyle?: string;
}

export interface BookProps {
  id: number;
  title: string;
  year_creation: number;
  year_published: number;
  page_amount: number;
  quantity: number;
  isbn_number: string;
  description: string;
  country_id: number;
  publisher_id: number;
  genres: Genre[];
  authors: Author[];
  catalogs: Catalog[];
  country: Country;
  publisher: Publisher;
}

export type BookTableProps = Omit<BookProps, 'genres' | 'authors' | 'catalogs' | 'country' | 'publisher' | 'description'>;
export interface BookCardProps extends HTMLAttributes<HTMLDivElement> {
  book: BookProps;
}

export interface TableCellProps<TData, TValue>
  extends CellContext<TData, TValue> {}
