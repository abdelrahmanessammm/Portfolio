import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AbdulRahman Essam Moussa | Digital Brand Manager",
  description:
    "Portfolio of AbdulRahman Essam Moussa — Digital Brand Manager focused on consumer health, digital transformation, omnichannel strategy and growth."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
