import { ScrollTable } from "@/components/ScrollTable";
import { Country } from "@/interfaces";
import { columns } from "./columns";
import axios from "axios";

async function fetchData() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/countries");
  return data;
}
export default async function Page() {
  const data = await fetchData();
  return (
    <ScrollTable<Country>
      title="Страны"
      columns={columns}
      data={data}
      word="страну"
      linkPart="countries"
    />
  );
}
