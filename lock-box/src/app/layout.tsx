import type { Metadata } from "next";
import { Inter, Maven_Pro } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const maven_pro = Maven_Pro({
  variable: "--font-maven-pro",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "LockBox",
  description: "Product landing page for LockBox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} ${maven_pro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
