import type React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Zahra & Adwin Wedding Invitation",
  description:
    "We are getting married and would love for you to join us on our special day.",
  generator: "v0.dev",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
