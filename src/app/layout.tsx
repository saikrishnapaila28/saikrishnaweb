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
  variable: "--font-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  "https://saikrishnapaila.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sai Krishna Paila — Data Science Student & Developer",
  description:
    "Sai Krishna Paila is a Computer Science student specializing in Data Science, with experience in web development, SEO and deployment, and interests in music, photography, writing and creative technology.",
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
    canonical: "./",
  },
  icons: {
    icon: "/sk-logo.png",
    shortcut: "/sk-logo.png",
    apple: "/sk-logo.png",
  },
  openGraph: {
    title: "Sai Krishna Paila — Data Science Student & Developer",
    description:
      "Sai Krishna Paila is a Computer Science student specializing in Data Science, with experience in web development, SEO and deployment, and interests in music, photography, writing and creative technology.",
    url: siteUrl,
    siteName: "Sai Krishna Paila",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Sai Krishna Paila Portfolio Visual Environment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Krishna Paila — Data Science Student & Developer",
    description:
      "Sai Krishna Paila is a Computer Science student specializing in Data Science, with experience in web development, SEO and deployment, and interests in music, photography, writing and creative technology.",
    images: ["/hero-bg.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sai Krishna Paila",
    url: siteUrl,
    email: "saikrishnapaila28@gmail.com",
    jobTitle: "Software Engineer",
    description:
      "Computer Science student specializing in Data Science with experience in web development, SEO and deployment.",
    sameAs: [
      "https://github.com/saikrishnapaila28",
      "https://www.linkedin.com/in/saikrishnapaila",
    ],
    affiliation: {
      "@type": "EducationalOrganization",
      name: "IILM University",
    },
  };

  return (
    <html
      lang="en"
      className={`scroll-smooth ${bricolageGrotesque.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
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
