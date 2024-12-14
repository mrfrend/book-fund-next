import { BookProps } from "@/interfaces";
import { BookCard } from "./BookCard";
import axios from "axios";
import { nanoid } from "nanoid";
export async function Books() {
  const { data } = await axios.get("http://localhost:8000/books");
  return (
    <>
      {data.map((book: BookProps) => (
        <BookCard key={nanoid()} book={book} />
      ))}
    </>
  );
}
