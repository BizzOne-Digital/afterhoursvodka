import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AgeGate from "@/components/AgeGate";

export const metadata: Metadata = {
  title: "After Hours Vodka | Canada's Premium Black Bottle Vodka",
  description: "Crafted with glacier water from Canada's Rocky Mountains for an exceptionally smooth finish. A premium Canadian vodka that's as unforgettable on the table as it is in the glass.",
  keywords: "After Hours Vodka, Canadian vodka, premium vodka, glacier water vodka, luxury spirits",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
        <AgeGate />
      </body>
    </html>
  );
}
