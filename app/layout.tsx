import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "TWK Nexus — Coworking em São Paulo",
  description:
    "Espaços de trabalho modernos, infraestrutura premium e uma comunidade que acelera seu crescimento. Conheça o TWK Nexus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
