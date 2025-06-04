import type React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Toaster from "@/components/ui/Toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zahra & Adwin Wedding Invitation",
  description:
    "We are getting married and would love for you to join us on our special day.",
  generator: "v0.dev",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Zahra & Adwin Wedding Invitation",
    description:
      "We are getting married and would love for you to join us on our special day.",
    images: [
      {
        url: "/ceco-720x1024.png", // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Zahra & Adwin Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zahra & Adwin Wedding Invitation",
    description:
      "We are getting married and would love for you to join us on our special day.",
    images: ["/ceco-720x1024.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
