import '../globals.css';
import Header from './_components/Header';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-1 flex justify-center items-center">
        {children}
      </main>
    </>
  );
}
