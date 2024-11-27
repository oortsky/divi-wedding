import Head from "next/head";
import { Poppins, Sacramento } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins"
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-sacramento"
});

export const metadata = {
  title: "ND Wedding — Official Invitation",
  description: "Undangan Pernikahan Nasrudin & Dewi Octaviani (Vivi).",
  openGraph: {
    title: "ND Wedding — Official Invitation",
    description: "Undangan Pernikahan Nasrudin & Dewi Octaviani (Vivi).",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "ND Wedding — Official Invitation",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/preview.png`,
        width: 1200,
        height: 630,
        alt: "Preview Image"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ND Wedding — Official Invitation",
    description: "Undangan Pernikahan Nasrudin & Dewi Octaviani (Vivi).",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/images/preview.png`]
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      style={{ scrollBehavior: "smooth" }}
      data-theme="light"
      lang="en"
      className={`${poppins.variable} ${sacramento.variable} font-poppins`}
    >
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta property="twitter:card" content={metadata.twitter.card} />
        <meta property="twitter:title" content={metadata.twitter.title} />
        <meta
          property="twitter:description"
          content={metadata.twitter.description}
        />
        <meta property="twitter:image" content={metadata.twitter.images[0]} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
