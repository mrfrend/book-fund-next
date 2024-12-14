"use client";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button, Input } from "@/components/index";
import { ActionForm } from "@/components/ActionForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { addAuthor } from "@/app/action";

async function fetchData() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/authors/");
  return data;
}
export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, [data]);

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
          action={(e) => {
            addAuthor(e);
            fetchData().then((data) => {
              setData(data);
            });
          }}
        >
          <Input
            name="firstName"
            className="py-0"
            placeholder="Имя"
            required
            maxLength={25}
          />
          <Input
            className="py-0"
            placeholder="Фамилия"
            required
            maxLength={50}
            name="lastName"
          />
          <Input
            className="py-0"
            placeholder="Отчество"
            maxLength={50}
            name="middleName"
          />
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
