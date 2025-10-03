import type { Metadata } from "next";
import {Figtree, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sideebar";

const font = Figtree({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Decible",
  description: "Seamless Music!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.variable} ${font.variable} antialiased`}
      ><Sidebar>
        {children}
        </Sidebar>
      </body>
    </html>
  );
}
