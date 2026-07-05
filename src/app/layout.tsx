import type { Metadata } from "next";
import "./globals.css";
import Providers from "../components/layout/providers";

export const metadata: Metadata = {
  title: "Token Sender",
  description: "Multi-chain ERC-20 Token Sender",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}