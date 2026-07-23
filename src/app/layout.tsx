import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/app/_components/ThemeProvider";
import SiteNav from "@/app/_components/SiteNav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noan Delatouche",
  description: "Portfolio - Web Developer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Noan Delatouche",
    description: "Portfolio - Web Developer",
    url: "https://noandelatouche.dev",
    siteName: "Noan Delatouche",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          <SiteNav />
          <main className="bg-gray-50 dark:bg-zinc-900 min-h-screen text-zinc-900 dark:text-white transition-colors duration-500">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
