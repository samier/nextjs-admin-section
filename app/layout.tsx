import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";
import SessionWrapper from "@/components/SessionWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, officia? Cumque quia id nostrum adipisci.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <SessionWrapper session={session}>
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader showSpinner={false} color="#AE46CA" />
          {children}
          <BootstrapClient />
          <Toaster />
        </body>
      </html>
    </SessionWrapper>
  );
}
