import { ScrollTable } from "@/components/ScrollTable";
import { columns } from "./columns";
import axios from "axios";
import { Catalog } from "@/interfaces";

async function fetchData() {
  const response = await axios.get(process.env.NEXT_PUBLIC_API + "/books");
  return response.data;
}
export default async function Page() {
  const data: Catalog[] = await fetchData();

  return (
    <ScrollTable<Catalog>
      title="Книги"
      columns={columns}
      data={data}
      word="книгу"
      linkPart="books"
    />
  );
}
