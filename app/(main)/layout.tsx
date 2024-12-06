export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <main className="flex flex-col">
        {children}
      </main>
    );
  }
  