import Link from "next/link";
import { Button } from "./Button";

export function AdminPanel() {
  return (
    <>
      <h1 className="text-center text-lg mb-[15px]">
        Администрационная панель
      </h1>

      <ul className="flex gap-[20px] justify-center">
        <li>
          <Link href={"/admin/authors"}>
            <Button className="px-[10px]">Авторы</Button>
          </Link>
        </li>
        <li>
          <Link href={"/admin/catalogs"}>
            <Button className="px-[10px]">Каталоги</Button>
          </Link>
        </li>
        <li>
          <Link href={"/admin/genres"}>
            <Button className="px-[10px]">Жанры</Button>
          </Link>
        </li>
        <li>
          <Link href={"/admin/books"}>
            <Button className="px-[10px]">Книги</Button>
          </Link>
        </li>
        <li>
          <Link href={"/admin/publishers"}>
            <Button className="px-[10px]">Издатели</Button>
          </Link>
        </li>
      </ul>
    </>
  );
}
