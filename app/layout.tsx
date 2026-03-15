import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Julia | CMO B2B SaaS | Zero-to-One Growth Leader",
  description: "Head of Marketing con 9 años escalarando startups B2B SaaS. Especialista en PLG, arquitectura de crecimiento y expansión paneuropea. Headhunters Series B/C.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
