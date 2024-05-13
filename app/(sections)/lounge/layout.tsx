
import type { Metadata } from "next";
import Header from "./_components/Header";



export const metadata: Metadata = {
  title: "Carabana Lounge",
  description: "Carabana Lounge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <body>
          <Header />
          { children }</body>

  );
}
