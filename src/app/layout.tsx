import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  "https://saikrishnapaila.netlify.app";

const title = "Sai Krishna Paila — Data Science Student & Software Engineer";
const description =
  "Sai Krishna Paila is a B.Tech Data Science student and Software Engineer building web experiences, AI systems, and exploring creative digital technology.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Sai Krishna Paila",
    "Sai Krishna Paila developer",
    "Sai Krishna Paila Data Science",
    "Data Science student",
    "Computer Science student",
    "Web Developer",
    "Software Engineer",
    "New Delhi developer",
    "IILM University Data Science",
  ],
  authors: [{ name: "Sai Krishna Paila", url: siteUrl }],
  creator: "Sai Krishna Paila",
  publisher: "Sai Krishna Paila",
  alternates: {
    canonical: "https://saikrishnapaila.netlify.app/",
  },
  icons: {
    icon: "/sk-logo.png",
    shortcut: "/sk-logo.png",
    apple: "/sk-logo.png",
  },
  openGraph: {
    title,
    description,
    url: "https://saikrishnapaila.netlify.app/",
    siteName: "Sai Krishna Paila",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://saikrishnapaila.netlify.app/og-image.jpg",
        secureUrl: "https://saikrishnapaila.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Sai Krishna Paila — Data Science Student & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "https://saikrishnapaila.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sai Krishna Paila — Data Science Student & Software Engineer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ki79TMeLPrXLfXu4dbO5B8V8_OQ6JS4uQXE0RYVC1rE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Sai Krishna Paila",
        "jobTitle": "Software Engineer",
        "url": "https://saikrishnapaila.netlify.app/",
        "image": "https://saikrishnapaila.netlify.app/og-image.jpg",
        "email": "saikrishnapaila28@gmail.com",
        "sameAs": [
          "https://github.com/saikrishnapaila28",
          "https://www.linkedin.com/in/saikrishnapaila"
        ]
      },
      {
        "@type": "WebSite",
        "name": "Sai Krishna Paila",
        "url": "https://saikrishnapaila.netlify.app/",
        "image": "https://saikrishnapaila.netlify.app/og-image.jpg"
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`scroll-smooth ${bricolageGrotesque.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="google-site-verification" content="ki79TMeLPrXLfXu4dbO5B8V8_OQ6JS4uQXE0RYVC1rE" />
        <link rel="image_src" href="https://saikrishnapaila.netlify.app/og-image.jpg" />
        <meta name="image" content="https://saikrishnapaila.netlify.app/og-image.jpg" />
        <meta itemProp="image" content="https://saikrishnapaila.netlify.app/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#070E09] text-[#F7F4EE] min-h-screen font-cozy selection:bg-golden-500/30 selection:text-paper-50">
        {children}
      </body>
    </html>
  );
}
