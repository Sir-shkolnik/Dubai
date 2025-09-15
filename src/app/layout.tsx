import type { Metadata } from "next";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import UserTracker from "@/components/UserTracker";

export const metadata: Metadata = {
  title: "Let's Get Moving — Dubai | Professional Movers",
  description: "Full-service movers in Dubai: packing, transport, storage, junk removal. Licensed & insured. Get a fast quote.",
  keywords: "movers dubai, moving company dubai, packing services dubai, storage dubai, office movers dubai, villa movers dubai",
  authors: [{ name: "Let's Get Moving Dubai" }],
  creator: "Let's Get Moving Dubai",
  publisher: "Let's Get Moving Dubai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lgm-dubai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Let's Get Moving — Dubai | Professional Movers",
    description: "Full-service movers in Dubai: packing, transport, storage, junk removal. Licensed & insured. Get a fast quote.",
    url: 'https://lgm-dubai.com',
    siteName: "Let's Get Moving Dubai",
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Let's Get Moving — Dubai | Professional Movers",
    description: "Full-service movers in Dubai: packing, transport, storage, junk removal. Licensed & insured. Get a fast quote.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="3pjVhCn5LIC2bT38H7sIGPPR8YQwrtOkiKOrsakr5gA" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LYW60LW7VV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LYW60LW7VV');
            `,
          }}
        />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className="antialiased">
        <UserTracker>
          {children}
        </UserTracker>
      </body>
    </html>
  );
}
