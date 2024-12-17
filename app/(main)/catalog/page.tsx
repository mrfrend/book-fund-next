import { Books } from "@/components/Books";
import { BooksSkeleton } from "@/components/BooksSkeleton";
import { Suspense } from "react";
import Filters from "@/components/Filters";


export default function Catalog() {
  return (
    <div className="px-[10px] flex justify-center gap-[15px]">
      <section className="bg-white rounded-[20px] pt-[33px] pl-[15px] pb-[10px] w-full max-w-[375px] min-h-[620px]">
        <form className="flex flex-col gap-[15px]">
          <Suspense fallback={<p className="text-lg">Загрузка фильтров...</p>}>
            <Filters />
          </Suspense>
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
