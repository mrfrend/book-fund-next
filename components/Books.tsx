import { BookProps } from "@/interfaces";
import { BookCard } from "./BookCard";
import axios from "axios";
export async function Books() {
  const { data } = await axios.get("http://localhost:8000/books");
  return (
    <>
      {data.map((book: BookProps) => (
        <BookCard book={book} />
      ))}
    </>
  );
}
