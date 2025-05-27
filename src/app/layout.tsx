import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaultix - File Management System",
  keywords: [
    "file management",
    "cloud storage",
    "secure files",
    "file sharing",
    "vaultix",
    "nextjs app",
  ],
  authors: [{ name: "EfosaE", url: "https://vaultix.com" }],
  creator: "EfosaE",
  description: "Your one stop solution for secure file management and sharing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
