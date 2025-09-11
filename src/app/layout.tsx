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
  title: "Lady Betty - Effortless Elegance Fashion",
  description: "Discover your perfect style with Lady Betty's curated collections of contemporary fashion. Premium fabrics, timeless designs, and effortless elegance for the modern woman.",
  keywords: "fashion, women's clothing, elegant fashion, ready-to-wear, contemporary style, feminine fashion, Lady Betty",
  authors: [{ name: "Lady Betty Fashion" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "/images/logo/Lady_Betty_favicon.ico",
    shortcut: "/images/logo/Lady_Betty_favicon.ico",
    apple: "/images/logo/Lady_Betty_favicon.ico",
  },
  openGraph: {
    title: "Lady Betty - Effortless Elegance Fashion",
    description: "Discover your perfect style with Lady Betty's curated collections of contemporary fashion.",
    type: "website",
    locale: "en_US",
  },
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
