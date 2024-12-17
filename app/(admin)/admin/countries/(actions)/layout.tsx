import Link from "next/link";
import { Button } from "@/components/index";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href={"/admin/countries"}>
        <Button className="px-[20px] w-[150px] h-[40px]">Назад</Button>
      </Link>
      {children}
    </>
  );
}