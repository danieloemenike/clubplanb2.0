import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
// const inter = Inter({ subsets: ["latin"] });

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const gv = localFont({
  src: '../fonts/greatvibes/GreatVibes-Regular.ttf',
  display: 'swap',
  variable: '--font-gv'
})

export const metadata: Metadata = {
  title: "Club Plan B 2.0",
  description: "Club Plan B 2.0 -  Fun Never Stops..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={  `${inter.variable} ${gv.variable} ` }>{children}</body>
    </html>
  );
}
