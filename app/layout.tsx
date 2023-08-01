import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
