export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-center items-center">
      {children}
    </main>
  );
}
