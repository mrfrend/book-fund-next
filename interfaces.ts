import { HTMLAttributes } from "react";

export interface CheckboxProps {
  value: string;
  labelText: string;
  id: string;
}

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
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  authors: [
    {
      id: number;
      first_name: string;
      last_name: string;
      middle_name?: string;
    }
  ];
  catalogs: [
    {
      id: number;
      name: string;
    }
  ];
  country: {
    id: number;
    name: string;
  };
  publisher: {
    id: number;
    name: string;
  };
}

export interface BookCardProps extends HTMLAttributes<HTMLDivElement> {
  book: BookProps;
}
