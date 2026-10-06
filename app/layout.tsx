import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fermor — Your money, made clearer.",
  description:
    "Understand where your money goes, make smarter decisions, and build toward what matters. Calm, intelligent financial clarity for modern life.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF9F5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-canvas text-charcoal font-sans antialiased selection:bg-accent/15 selection:text-accent">
        {children}
      </body>
    </html>
  );
}
