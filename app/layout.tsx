import type { Metadata } from "next";
import { Archivo, Instrument_Serif, Fragment_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const fragment = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fragment",
});

export const metadata: Metadata = {
  title: "RELY360 — From Running a Factory to Owning an Enterprise",
  description:
    "Five practices, one partner: operations excellence, brand & D2C transformation, franchise expansion, capital & M&A, and compliance. India's 360° business transformation firm for manufacturers and industrial businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${instrument.variable} ${fragment.variable} grain antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
