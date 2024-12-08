import { NavBar } from "@/components/NavBar";

export default function Layout({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) {
  return (
    <main className="flex flex-col gap-5">
      <header>
        <NavBar />
      </header>
      {modal}
      {children}
    </main>
  );
}
