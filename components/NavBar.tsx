interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {}
import Link from "next/link"
export function NavBar(props: NavBarProps) {
    return (
        <nav className="" {...props}>
            <ul>
                <li>
                    <Link href="/desired-list">Желаемое</Link>
                </li>
                <li>
                    <Link href="/personal-account">Личный кабинет</Link>
                </li>
                <li>
                    Something
                </li>
                <li>
                    Username
                </li>
            </ul>
        </nav>
    )
}