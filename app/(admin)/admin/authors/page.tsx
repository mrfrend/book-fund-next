import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { Button} from "@/components/index";
import axios from "axios";
import Link from "next/link";
import { ScrollTable } from "@/components/ScrollTable";
import { Author } from "@/interfaces";

async function fetchData() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/authors/");
  return data;
}
export default async function Page() {
  const data = await fetchData();

  return (
    <ScrollTable<Author>
      title="Авторы"
      columns={columns}
      data={data}
      word="автора"
      linkPart="authors"
    />
  );
}
