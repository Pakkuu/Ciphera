import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Providers from './providers';

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyphera",
  description: "cloud-based file storage solution with end-to-end encryption",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={raleway.className}><Providers>{children}</Providers></body>
    </html>
  );
}
