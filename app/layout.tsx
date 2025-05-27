import type { Metadata } from "next";

import "./globals.css";

// app/layout.tsx
import { ThemeModeScript } from 'flowbite-react';

export const metadata: Metadata = {
  title: "Robert Muyanja",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
    <head>
        <ThemeModeScript />
    </head>
    <body>{children}</body>
</html>
  );
}

