import Link from "next/link";
import { Button } from "@/components/index";
export default function Admin() {
  return (
    <>
      <h1>Admin</h1>

      <ul className="flex gap-[10px] justify-around">
        <li>
          <Link href={'/admin/authors'}>
            <Button className="px-[10px]">Авторы</Button>
          </Link>
        </li>
        <li>
          <Link href={'/admin/catalogs'}>
            <Button className="px-[10px]">Каталоги</Button>
          </Link>
        </li>
        <li>
          <Link href={'/admin/genres'}>
            <Button className="px-[10px]">Жанры</Button>
          </Link>
        </li>
        <li>
          <Link href={'/admin/books'}>
            <Button className="px-[10px]">Книги</Button>
          </Link>
        </li>
      </ul>
    </>
  );
}
