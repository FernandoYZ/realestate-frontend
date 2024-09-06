import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/sections/header";
import Footer from "@/sections/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Terranova Inmobiliaria SAC - Panel Administrativo",
  description: "Panel administrativo de Terranova Inmobiliaria SAC.",
  robots: "noindex, nofollow",
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}
        <Header/>
        <Footer/>
      </body>
    </html>
  );
}
