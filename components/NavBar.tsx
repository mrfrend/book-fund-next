import SearchLoop from "../assets/searchLoop.svg";
interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {}
import Link from "next/link";
import { Input } from "./Input/Input";
export function NavBar(props: NavBarProps) {
  return (
    <nav className="h-[45px] px-4 pt-3" {...props}>
      <ul className="flex justify-end items-center gap-8 mx-auto text-white text-xl font-medium">
        <li>
          <Link href="/desired-list">Желаемое</Link>
        </li>
        <li>
          <Link href="/personal-account">Личный кабинет</Link>
        </li>
        <li>
          <Input
            className="h-[40px] text-lg text-black !outline-thirdColor"
            placeholder="Введите название..."
            icon={<SearchLoop />}
          />
        </li>
        <li>Username</li>
      </ul>
    </nav>
  );
}
