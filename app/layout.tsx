import type { Metadata } from "next";
import { Inter, Courier_Prime } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "CadellAscope Enterprises | Financial Coaching",
  description:
    "Personalized 1-on-1 financial coaching to help you budget smarter, eliminate debt, and build lasting wealth. Book your free consultation today.",
  keywords: "financial coaching, budgeting, debt elimination, credit building, personal finance",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${courierPrime.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
