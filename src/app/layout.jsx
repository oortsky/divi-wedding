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
  title: "Divi Wedding — Official Invitation",
  description: "Undangan Pernikahan Nasrudin & Dewi Octaviani (Vivi).",
  openGraph: {
    title: "Divi Wedding — Official Invitation",
    description: "Undangan Pernikahan Nasrudin & Dewi Octaviani (Vivi).",
    url: `${process.env.BASE_URL}`,
    siteName: "Divi Wedding — Official Invitation",
    images: [
      {
        url: "images/preview.jpg",
        width: 800,
        height: 600,
        alt: "Preview Image"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Divi Wedding — Official Invitation",
    description: "Undangan Pernikahan Nasrudin & Dewi Octaviani (Vivi).",
    images: ["images/preview.jpg"]
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
      <body>{children}</body>
    </html>
  );
}
