import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jayesh",
  description:
    "Crafting fast, scalable, and beautifully designed web applications with a focus on seamless user experiences.",
  metadataBase: new URL("https://jayesh-five.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Jayesh",
    description:
      "Explore my portfolio showcasing projects built with Next.js, Prisma, and PostgreSQL.",
    url: "https://jayesh-five.vercel.app",
    siteName: "Jayesh",
    images: [
      {
        url: "https://jayesh-five.vercel.app/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Jayesh Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
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
        <Navbar />
        <main className="min-h-screen w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
