import { NavBar } from "@/components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <main className="flex flex-col">
        <NavBar />
        {children}
      </main>
    );
  }
  