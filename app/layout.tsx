import Model from "@/components/Model";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LoginModel from "@/components/models/LoginModel";
import RegisterModel from "@/components/models/ResgisterModel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitverse",
  description:
    "twitter and x clone using react nextjs tailwinid typescript mongodb prisa ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RegisterModel />
        <LoginModel />
        {children}
      </body>
    </html>
  );
}
