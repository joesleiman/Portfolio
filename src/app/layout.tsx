import type { Metadata } from "next";
import { Inter, Montserrat } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Joe Sleiman | Portfolio",
  description: "Showcase my projects, experience and my Bio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="8Z_OWwLKYQqaQ-knuxIh52FUBQMPYy_ZuDymKi5berA" />
        <title>Joe Sleiman Portfolio</title>
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
