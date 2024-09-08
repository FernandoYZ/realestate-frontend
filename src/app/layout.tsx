import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

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
      <head>
      </head>
      <body className={`${inter.className} flex items-start justify-between`}>
        <Header/>
        <main className="w-full h-full">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
