import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Basics",
  description: "Next.js basics with Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="
          container
          bg-yellow-700
          mx-auto
          min-h-screen
          px-6
          flex
          flex-col
          justify-between
         "
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
