import { ScrollTable } from "@/components/ScrollTable";
import { Catalog } from "@/interfaces";
import { columns } from "./columns";
import axios from "axios";
async function fetchData() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/catalogs");
  return data;
}
export default async function Page() {
  const data = await fetchData();
  return (
    <ScrollTable<Catalog>
      title="Каталоги"
      columns={columns}
      data={data}
      word="каталог"
      linkPart="catalogs"
    />
  );
}
