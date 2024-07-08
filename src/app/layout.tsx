import type { Metadata } from "next";
import { Saira } from "next/font/google";

import "./globals.css";
import Header from "./components/Header";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        {children}
      </body>
    </html>
  );
}
