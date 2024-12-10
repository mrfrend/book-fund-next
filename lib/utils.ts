import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Author, Catalog, Genre, Publisher, CheckboxProps } from "@/interfaces";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
interface Data {
  id: number;
  name: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
}
// type Data = Author[] | Catalog[] | Genre[] | Publisher[];
type DataItem = "author" | "catalog" | "genre" | "publisher";
export function formateDateToCheckBoxes(
  data: Data[],
  dataType: DataItem
): CheckboxProps[] {
  let result: CheckboxProps[] = [];
  if (dataType === "author") {
    result = data.map((author: Data) => ({
      value: author.id.toString(),
      labelText: `${author.first_name} ${author.last_name}`,
      id: `author-${author.id}`,
    }));
  } else {
    result = data.map((item: Data) => ({
      value: item.id.toString(),
      labelText: item.name,
      id: `${dataType}-${item.id}`,
    }));
  }
  return result;
}
