import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TantraFiesta",
  description: "Annual Tech Fest of IIIT Nagpur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-clip`}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
