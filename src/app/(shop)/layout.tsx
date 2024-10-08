import '../globals.css';
import Header from './_components/Header';
import { CartProvider } from './_components/Cart/CartContext';
import Footer from './_components/Footer';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CartProvider>
        <Header />
        <main className="flex-1 flex justify-center items-center">
          {children}
        </main>
        <Footer />
      </CartProvider>
    </>
  );
}
