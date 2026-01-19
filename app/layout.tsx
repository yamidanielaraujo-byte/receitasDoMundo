import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Globe from "@/components/ui/globe";


import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Receitas do Mundo",
  description: "Criado por Yami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <br></br><br></br>

        {/* <footer className="bg-gray-800 text-white p-4 text-center">
          © 2026 Receitas do Mundo. Todos os direitos reservados.
        </footer> */}
      </body>

      
    </html>
  );
}
