import Header from "@/components/Header";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Carabana Club",
  description: "Carabana Club",
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
