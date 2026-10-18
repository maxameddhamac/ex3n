import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Form Exercises",
  description: "Three server-backed form exercises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
