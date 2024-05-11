import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import { Navbar, Footer } from "@/components/shared";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900",]
});

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
      <body className={`${prompt.className} bg-dark`} suppressHydrationWarning={true}>
        <Navbar />
        <main className="pb-16 text-light">
          <NextTopLoader
            showSpinner={false}
            color="#F99417"
          />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
