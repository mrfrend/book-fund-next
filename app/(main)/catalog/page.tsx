import { CheckboxGroup } from "@/components/index";
import { Author, CheckboxGroupProps } from "@/interfaces";
import { Button } from "@/components/index";
import { Books } from "@/components/Books";
import { Suspense } from "react";
import { formateDateToCheckBoxes } from "@/lib/utils";
import { BooksSkeleton } from "@/components/BooksSkeleton";
import axios from "axios";

export default async function Catalog() {
  const [catalogs, authors, genres, publishers] = await Promise.all([
    axios.get(process.env.NEXT_PUBLIC_API + "/catalogs"),
    axios.get(process.env.NEXT_PUBLIC_API + "/authors"),
    axios.get(process.env.NEXT_PUBLIC_API + "/genres"),
    axios.get(process.env.NEXT_PUBLIC_API + "/publishers"),
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
