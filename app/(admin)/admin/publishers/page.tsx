import { ScrollTable } from "@/components/ScrollTable";
import { Publisher } from "@/interfaces";
import { columns } from "./columns";
import axios from "axios";

async function fetchData() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/publishers");
  return data;
}
export default async function Page() {
  const data = await fetchData();
  return (
    <ScrollTable<Publisher>
      title="Издатели"
      columns={columns}
      data={data}
      word="издателя"
      linkPart="publishers"
    />
  );
}
