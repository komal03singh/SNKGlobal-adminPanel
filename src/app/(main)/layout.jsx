import Header from "@/Components/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="ml-[25%] min-h-screen p-6">
        {children}
      </main>
    </>
  );
}
