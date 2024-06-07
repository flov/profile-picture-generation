import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Arimo } from "next/font/google";
import { Fira_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
});
const fira_mono = Fira_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira_mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Profile Picture Generation",
  description: "Profile Picture Generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arimo.variable + " " + fira_mono.variable}>
        {children}
      </body>
    </html>
  );
}
