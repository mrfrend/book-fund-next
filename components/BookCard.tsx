import { BookCardProps } from "@/interfaces";
import { nanoid } from "nanoid";
import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
export function BookCard({ book }: BookCardProps) {
  return (
    <div
      className="max-w-[800px] w-full py-[10px] pl-[20px] pr-[10px] bg-white rounded-[40px] flex items-start gap-[15px]"
    >
      <Image
        src={`http://localhost:8000/books/image/${book.id}`}
        className="rounded-[10px] border-4 border-thirdColor flex-grow"
        alt={book.title}
        width={140}
        height={210}
      />
      <div>
        <header>
          <h3 className="text-[18px] mb-[5px] text-black">{book.title}</h3>
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
        <p className="text-[14px] text-black mb-[5px]">{book.description}</p>
        <footer className="flex flex-col gap-[5px]">
          <p className="text-[14px] text-mainColor">
            Количество экземпляров: {book.quantity}
          </p>
          <p className="text-[14px] text-mainColor">
            Издательство: {book.publisher?.name}
          </p>
        </footer>
        <Link href={`/book/${book.id}`}>
          <Button className="text-[14px] px-5 mt-auto py-2">Подробнее</Button>
        </Link>
      </div>
    </div>
  );
}
