import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

export const metadata: Metadata = {
  title: "DuckCross",
};

const font = localFont({
  src: [
    {
      path: "./font/PublicSans-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./font/PublicSans-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "./font/PublicSans-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./font/PublicSans-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "./font/PublicSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./font/PublicSans-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./font/PublicSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/PublicSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./font/PublicSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/PublicSans-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./font/PublicSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./font/PublicSans-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./font/PublicSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/PublicSans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./font/PublicSans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./font/PublicSans-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "./font/PublicSans-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./font/PublicSans-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased`}>
      <body>{children}</body>
    </html>
  );
}
