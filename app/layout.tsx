import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import "./globals.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My store",
  description:
    "My Store, an e-commerce website which utilizes DummyJson/products and Firebase in backend and database.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Navbar appName="My Store" />
            {children}
          </CartProvider>
        </AuthProvider>
        <Footer devName="Nikita Jain" />
      </body>
    </html>
  );
}
