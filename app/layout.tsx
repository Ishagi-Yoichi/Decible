import type { Metadata } from "next";
import {Figtree, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sideebar";
import SupabaseProvider from "@/providers/SupabaseProvider";

const font = Figtree({
  variable: "--font-geist-sans",
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
      >
        <SupabaseProvider>
        <Sidebar>
        {children}
        </Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  );
}
