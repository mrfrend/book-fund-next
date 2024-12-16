import { Button } from "@/components/index";
import Link from "next/link";
import { logout } from "../action";
import { AdminPanel } from "@/components/AdminPanel";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col justify-center items-center px-4 gap-[20px]">
      <div className="max-w-[1050px] p-3 pb-5 flex-1 w-full bg-white rounded-lg mt-[25px] h-full max-h-[820px]">
        <div className="flex justify-end">
          <Link href={"/admin"}>
            <Button
              onClick={logout}
              className="px-[10px] !bg-red-500 hover:!bg-red-700"
            >
              Выйти
            </Button>
          </Link>
        </div>
        <AdminPanel />
      </div>
      <div className="flex-1 max-w-[1050px] w-full p-3 pb-5 bg-white rounded-lg">
        {children}
      </div>
    </main>
  );
}
