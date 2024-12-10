import { CheckboxGroup } from "@/components/index";
import { Author, CheckboxGroupProps } from "@/interfaces";
import { Button } from "@/components/index";
import { Books } from "@/components/Books";
import { Suspense } from "react";
import { formateDateToCheckBoxes } from "@/lib/utils";
import { BooksSkeleton } from "@/components/BooksSkeleton";
import axios from "axios";
const example: CheckboxGroupProps[] = [
  {
    title: "Каталоги",
    name: "categories",
    checkboxes: [
      { value: "1", labelText: "Русская классика", id: "russian-classic" },
      { value: "2", labelText: "Литература", id: "literature" },
      { value: "3", labelText: "Философия", id: "philosophy" },
      { value: "4", labelText: "История", id: "history" },
      { value: "5", labelText: "Политика", id: "politics" },
      { value: "6", labelText: "История", id: "history" },
    ],
    checkboxStyle: "border-thirdColor border-4",
  },
  {
    title: "Жанры",
    name: "genres",
    checkboxes: [
      { value: "1", labelText: "Русская классика", id: "russian-classic" },
      { value: "2", labelText: "Литература", id: "literature" },
      { value: "3", labelText: "Философия", id: "philosophy" },
      { value: "4", labelText: "История", id: "history" },
    ],
  },
];
export default async function Catalog() {
  const [catalogs, authors, genres, publishers] = await Promise.all([
    axios.get("http://localhost:8000/catalogs"),
    axios.get("http://localhost:8000/authors"),
    axios.get("http://localhost:8000/genres"),
    axios.get("http://localhost:8000/publishers"),
  ]);

  console.log(publishers.data);

  return (
    <div className="px-[10px] flex justify-center gap-[15px]">
      <section className="bg-white rounded-[20px] pt-[33px] pl-[15px] pb-[10px] w-full max-w-[375px] min-h-[620px]">
        <form className="flex flex-col gap-[15px]">
          <CheckboxGroup
            title="Авторы"
            name="authors"
            checkboxes={formateDateToCheckBoxes(authors.data, "author")}
          />
          <CheckboxGroup
            title="Жанры"
            name="genres"
            checkboxes={formateDateToCheckBoxes(genres.data, "genre")}
          />
          <CheckboxGroup
            title="Издательства"
            name="publishers"
            checkboxes={formateDateToCheckBoxes(publishers.data, "publisher")}
          />
          <CheckboxGroup
            title="Каталоги"
            name="catalogs"
            checkboxes={formateDateToCheckBoxes(catalogs.data, "catalog")}
          />
          <Button className="w-[140px] h-[35px] text-lg mt-[15px]">
            Применить
          </Button>
        </form>
      </section>
      <section className="grid gap-[20px] grid-rows-2 grid-cols-1">
        <Suspense fallback={<BooksSkeleton />}>
          <Books />
        </Suspense>
      </section>
    </div>
  );
}
