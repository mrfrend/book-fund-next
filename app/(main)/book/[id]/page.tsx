import axios from "axios";
import { BookCard } from "@/components/BookCard";
export default async function Page({ params }: { params: Promise<{id: string}> }) {
  const book_id = (await params).id;
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + `/books/${book_id}`);
  return <BookCard book={data} />;
}
