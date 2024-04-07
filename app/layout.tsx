import type { Metadata } from "next";
import Header from "./_components/Header";
import ScrollToTop from "./_components/ScrollToTop";
import { Cairo } from "next/font/google";
import "./globals.css";
import fav from "./favicon.ico";
import bg from "../public/bg-effect.svg"
import Image from "next/image";
import SubFooter from "./_components/SubFooter";


const inter = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoveMate",
  description:
    "MoveMate is a platform for finding and booking moving services.",
  icons: {
    icon: fav + "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Todo - Add a dutch lang attribute to the html tag
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <Image
          src={bg}
          alt="Home"
          width={1920}
          height={1080}
          className="w-full h-full fixed !-z-10"
        />
        <Providers>
          <Header />
          {children}
          <SubFooter />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
import Providers from "./Providers";

