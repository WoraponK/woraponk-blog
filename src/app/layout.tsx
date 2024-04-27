import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar, Footer } from "@/components/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WoraponK",
  description: "Created by WoraponK (Worapon Klabsri)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark`}>
        <Navbar />
        <div className="py-16 text-light">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
