import { ScrollTable } from "@/components/ScrollTable";
import { Genre } from "@/interfaces";
import { columns } from "./columns";
import axios from "axios";

async function fetchData() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/genres");
  return data;
}
export default async function Page() {
  const data = await fetchData();
  return (
    <ScrollTable<Genre>
      title="Жанры"
      columns={columns}
      data={data}
      word="жанр"
      linkPart="genres"
    />
  );
}
