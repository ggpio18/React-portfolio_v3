import type { Metadata } from "next";
import {Inter, Calistoga} from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans"});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Pio Aranza - Web Developer & UI/UX Designer",
  description: "Explore the work of Pio Aranza, featuring innovative web projects and creative designs.",
  keywords: "Pio Aranza, Pio, Aranza, Web Developer, UI/UX Designer, Portfolio",
  icons: {
    icon: "/memoji-computerv2.ico", // For a standard favicon
    apple: "/apple-touch-icon.png", // For iOS home screen (optional)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="KyK2RVE6RqiDMoozA3xRpcNPJdPv_la-GDDxXYY5I9o" />
      <body className={twMerge(
      inter.variable, 
      calistoga.variable, 
        "bg-gray-900 text-white antialiased font-sans"
        )}>
          {children}
          <Analytics/>
          </body>
    </html>
  );
}
