import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme/theme-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jayesh Khuman | Full Stack Web Developer | Portfolio",
  description:
    "Portfolio of Jayesh Khuman – Full Stack Developer specializing in Next.js, Mern stack,React, TypeScript, Node.js, and PostgreSQL. Building scalable, fast, and SEO-friendly web applications with beautiful UI/UX.",
  metadataBase: new URL("https://jayeshkhuman.in"),
  keywords: [
    "Jayesh Khuman",
    "Jayesh Portfolio",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "SEO",
    "AI projects",
  ],
  authors: [{ name: "Jayesh Khuman", url: "https://jayeshkhuman.in" }],
  creator: "Jayesh Khuman",
  publisher: "Jayesh Khuman",
  alternates: {
    canonical: "https://jayeshkhuman.in",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Jayesh Khuman | Full Stack Web Developer",
    description:
      "Explore the portfolio of Jayesh Khuman – Building scalable, SEO-optimized, and modern web apps using Next.js, React, TypeScript, and PostgreSQL.",
    url: "https://jayeshkhuman.in",
    siteName: "Jayesh Khuman Portfolio",
    images: [
      {
        url: "https://jayeshkhuman.in/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Jayesh Khuman Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayesh Khuman | Full Stack Web Developer",
    description:
      "Official portfolio of Jayesh Khuman – Full Stack Developer crafting high-performance, SEO-friendly web applications.",
    images: ["https://jayeshkhuman.in/portfolio.png"],

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
         attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen w-full">
            {children}
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>


      </body>
    </html>
  );
}
