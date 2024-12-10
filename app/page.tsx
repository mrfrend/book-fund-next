import Image from "next/image";
import axios from "axios";
import { Button } from "@/components/index";
import { logout } from "./action";
import { ScrollArea } from "@/components/ui/scroll-area";

const generateScroll = () => {
  const result = [];
  for (let i = 0; i < 100; i++) {
    result.push(
      <div key={i} className="flex items-center gap-4 bg-gray-300 text-black font-bold text-lg">{i}</div>
    )
  }
  return result
}
export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-white text-2xl text-center">Главная страничка</h1>
      <ScrollArea className="h-72 w-48 rounded-md border">
        {...generateScroll()}
      </ScrollArea>
      <form action={logout}>
        <Button type="submit">Выйти</Button>
      </form>
    </div>
  );
}
