import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";

const exo = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iDecision",
  description: "Sky is The Limit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo.className}>{children}</body>
    </html>
  );
}
