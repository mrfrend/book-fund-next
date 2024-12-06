import Image from "next/image";
import axios from "axios";
import { Button } from "@/components";
import { logout } from "./action";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-white text-2xl text-center">Главная страничка</h1>
      <form action={logout}>
        <Button type="submit">Выйти</Button>
      </form>
    </div>
  );
}