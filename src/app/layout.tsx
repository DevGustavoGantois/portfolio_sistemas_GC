import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./global/navbar";
import { Footer } from "./global/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio GC Technology",
  description: "Portfolio desenvolvido para mostrar nossos serviços na criação de sistemas robutos, Sass, Websites entre outros...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-[#000000] via-[#03001A] to-[#050505]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
