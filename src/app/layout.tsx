import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
// import Header from "@/components/header";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Repair Solution",
  description: "Uma solução automatica para o seu problema",
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col h-screen antialiased`}
      >
        
        {children}
        <Footer/>
       
      </body>
    </html>
  );
}
