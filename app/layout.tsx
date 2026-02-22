import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Portfolio - Edwin Anderson",
  description: "Simple landingpage portfolio",
};

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-redhat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={redHat.variable}>
      <body className="min-h-screen bg-black text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
