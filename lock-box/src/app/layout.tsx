import type { Metadata } from "next";
import { Maven_Pro } from 'next/font/google'
import "./globals.css";

const mavinPro = Maven_Pro({
  variable: "--font-maven-pro",
  subsets: ["latin"],
});

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
        className={`${mavinPro.variable} ${mavinPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
