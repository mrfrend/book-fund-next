import { BookCardProps } from "@/interfaces";
import { nanoid } from "nanoid";
import Image from "next/image";
import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "./Button";
import Link from "next/link";
export function BookCardModal({ book }: BookCardProps) {
  return (
    <div
      className="w-full py-[10px] pl-[20px] pr-[10px] !text-xl !leading-5 bg-white rounded-[40px] flex items-start gap-[15px]"
      key={nanoid()}
    >
      <Image
        src={`http://localhost:8000/books/image/${book.id}`}
        className="rounded-[10px] border-4 border-thirdColor flex-grow w-full"
        alt={book.title}
        width={140}
        height={210}
      />
      <div>
        <header>
          <DialogTitle className="text-[24px] font-bold text-black mb-[5px]">
            {book.title}
          </DialogTitle>
          <p className="text-[14px] text-mainColor">
            {book.authors
              ?.map(
                (author) =>
                  `${author.first_name.slice(0, 1)}. ${
                    author.middle_name?.slice(0, 1) ?? ""
                  }. ${author.last_name}`
              )
              .join(", ")}
          </p>
        </header>
        <p className="mb-[5px] text-black text-[14px]">{book.description}</p>
        <footer className="flex flex-col gap-[5px] text-[14px] text-mainColor">
          <p>
            Количество экземпляров:{" "}
            <span className="text-black">{book.quantity}</span>
          </p>
          <p>
            Издательство:{" "}
            <span className="text-black">{book.publisher?.name}</span>
          </p>
          <p>
            Количество страниц:{" "}
            <span className="text-black">{book.page_amount}</span>
          </p>
          <p>
            Страна: <span className="text-black">{book.country?.name}</span>
          </p>
          <p>
            Год создания:{" "}
            <span className="text-black">{book.year_creation}</span>
          </p>
          <p>
            Год издания:{" "}
            <span className="text-black">{book.year_published}</span>
          </p>
          <p>
            Жанры:{" "}
            <span className="text-black">
              {book.genres
                ?.map((genre) => genre.name)
                .join(", ")}
            </span>
          </p>
          <p>
            Каталоги:{" "}
            <span className="text-black">
              {book.catalogs
                ?.map((catalog) => catalog.name)
                .join(", ")}
            </span>
          </p>
          <p>
            Номер ISBN: <span className="text-black">{book.isbn_number}</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
