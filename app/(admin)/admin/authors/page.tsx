import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button, Input } from "@/components/index";
import { ActionForm } from "@/components/ActionForm";
import { addAuthor } from "@/app/action";
export default async function Page() {
  const { data } = await axios.get("http://localhost:8000/authors");
  return (
    <>
      <h1 className="text-[24px] text-center">Авторы</h1>
      <ScrollArea className="max-h-[700px] container mx-auto py-10 rounded-md border">
        <DataTable columns={columns} data={data} />
      </ScrollArea>
      <div className="flex flex-col items-center gap-4">
        <ActionForm
          title="Добавить автора"
          className="flex flex-col justify-center items-center gap-4"
          action={addAuthor}
        >
          <Input name="firstName" className="py-0" placeholder="Имя" required maxLength={25} />
          <Input
            className="py-0"
            placeholder="Фамилия"
            required
            maxLength={50}
            name="lastName"
          />
          <Input className="py-0" placeholder="Отчество" maxLength={50} name="middleName" />
          <Button className="p-[5px] w-[200px]">Добавить</Button>
        </ActionForm>
        <ActionForm title="Удалить автора">
          <Input
            className="py-0"
            placeholder="ID автора"
            type="number"
            min={0}
            name="authorId"
          />
          <Button className="p-[5px] w-[200px]">Удалить</Button>
        </ActionForm>
      </div>
    </>
  );
}
