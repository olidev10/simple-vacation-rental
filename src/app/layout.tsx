import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import "./globals.css";
import { QueryProvider } from "./providers/QueryProvider";
import { I18nProvider } from "./providers/I18nProvider";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://botelhobeachhouse.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Place To Be",
    template: "%s | Place To Be",
  },
  description: "Casa de locação por temporada em Itanhaém, litoral paulista.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Place To Be",
    description:
      "Hospede-se em uma casa de praia exclusiva em Itanhaém, litoral de São Paulo.",
    url: "/",
    siteName: "Place To Be",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/hero-beach-house.jpg",
        width: 1200,
        height: 630,
        alt: "Vista da Place To Be ao pôr do sol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Place To Be",
    description: "Casa de locação por temporada em Itanhaém, litoral paulista.",
    images: ["/hero-beach-house.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased" suppressHydrationWarning>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <I18nProvider>
          <QueryProvider>
            <Navigation />
            {children}
          </QueryProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
