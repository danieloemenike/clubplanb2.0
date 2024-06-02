import Header from "@/components/Header";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Club Plan B 2.0",
  description: "Club Plan B 2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <body className="bg-black">
          <Header />
          { children }</body>

  );
}
