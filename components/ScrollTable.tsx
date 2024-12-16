import { DataTable } from "./ui/data-table";
import Link from "next/link";
import { Button } from "./Button";
import { ColumnHelper } from "@tanstack/react-table";
interface ScrollTableProps<TData> {
  title: string;
  columns: object[];
  data: TData[];
  word: string;
  linkPart: string;
}
export function ScrollTable<TData>({
  title,
  columns,
  data,
  word,
  linkPart,
}: ScrollTableProps<TData>) {
  return (
    <>
      <h1 className="text-[24px] text-center">{title}</h1>
      <div className="max-h-[500px] overflow-x-auto overflow-y-auto scrollbar-thin  mx-auto mb-5 rounded-md border">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="flex justify-center items-center gap-4">
        <Link href={`/admin/${linkPart}/delete`}>
          <Button className="px-[10px] py-[5px]  !bg-red-500 hover:!bg-mainColor">
            Удалить {word}
          </Button>
        </Link>
        <Link href={`/admin/${linkPart}/update`}>
          <Button className="px-[10px] py-[5px] bg-yellow-500">
            Обновить {word}
          </Button>
        </Link>
        <Link href={`/admin/${linkPart}/add`}>
          <Button className="px-[10px] py-[5px] bg-green-500">
            Добавить {word}
          </Button>
        </Link>
      </div>
    </>
  );
}
