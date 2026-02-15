import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from 'next-view-transitions'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zero Template",
  description: "A premium Next.js template for high-speed development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
    </ViewTransitions>
  );
}
