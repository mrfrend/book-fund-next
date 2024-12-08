import axios from "axios";
import { Modal } from "@/components/Modal";
import { BookCardModal } from "@/components/BookCardModal";

export default async function Book({ params }: {params: Promise<{id: string}>}) {
  const id = (await params).id;
  const { data } = await axios.get(`http://localhost:8000/books/${id}`);
  return (
    <Modal>
      <BookCardModal book={data} />
    </Modal>
  );
}
