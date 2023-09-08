import { Navbar } from "../components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercado Libre",
  description: "Buscador de Mercado Libre",
  keywords: "Mercado Libre, Next.js, React",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://mercadolibre.com.ar",
    title: "Mercado Libre",
    description: "Buscador de Mercado Libre",
    images: [
      {
        url: "/assets/images/logo-mercado-libre.png",
        width: 200,
        height: 200,
        alt: "Mercado Libre",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <small>Copyright © 1999-2023 MercadoLibre S.R.L.</small>
        </footer>
      </body>
    </html>
  );
}
