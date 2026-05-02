import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bokana Electronics | More Than a Powerbank. It's a Promise.",
  description: "Bokana Electronics provides reliable powerbanks, mini fans, and everyday electronics built for modern life, Nigerian power realities, and people who need dependable energy on the go.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
