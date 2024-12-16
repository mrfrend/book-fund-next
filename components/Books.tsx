import { BookProps } from "@/interfaces";
import { BookCard } from "./BookCard";
import axios from "axios";
import { nanoid } from "nanoid";
export async function Books() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/books");
  return (
    <>
      {data.map((book: BookProps) => (
        <BookCard key={nanoid()} book={book} />
      ))}
    </>
  );
}
