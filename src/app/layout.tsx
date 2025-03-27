import type { Metadata } from "next";
import {Inter, Calistoga} from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans"});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Pio Aranza Portfolio",
  description: "Created with the help of Frontend Tribe",
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
      <body className={twMerge(
      inter.variable, 
      calistoga.variable, 
        "bg-gray-900 text-white antialiased font-sans"
        )}>
          {children}
          </body>
    </html>
  );
}
