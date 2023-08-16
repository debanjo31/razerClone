import './globals.css';
import type { Metadata } from 'next';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';
import { Raleway, Titillium_Web } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Razer Clone',
  description: 'A clone of razer website',
};

const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
});

const tweb = Titillium_Web({
  weight: '400',
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={tweb.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
