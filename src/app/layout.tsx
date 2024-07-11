import type { Metadata } from "next";
import { Saira } from "next/font/google";

import "./globals.css";
import Header from "./components/Header";
import FilterType from "./components/ListTypes/FilterType";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Capputeeno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Header />
        <div className="bg-bgsite h-screen">{children}</div>
      </body>
    </html>
  );
}
