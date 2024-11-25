import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bruno Glowaski's Site",
  description: "Bruno Henrique Glowaski Morais personal & professional site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased relative tracking-wide`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
