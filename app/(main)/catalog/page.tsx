import { CheckboxGroup } from "@/components/index";
import { CheckboxGroupProps } from "@/interfaces";
import { Button } from "@/components/index";
import { Books } from "@/components/Books";
import { Suspense } from "react";
import { BooksSkeleton } from "@/components/BooksSkeleton";
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
export default function Catalog() {
  return (
    <div className="px-[10px] flex justify-center gap-[15px]">
      <section className="bg-white rounded-[20px] pt-[33px] pl-[15px] pb-[10px] w-full max-w-[375px] min-h-[620px]">
        <form className="flex flex-col gap-[15px]">
          <CheckboxGroup {...example[0]} />
          <CheckboxGroup {...example[1]} />
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
