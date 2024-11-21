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
  description: "Divi Wedding Invitation by Dove from Axara"
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
