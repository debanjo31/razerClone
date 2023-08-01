import './globals.css';
import type { Metadata } from 'next';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';

export const metadata: Metadata = {
  title: 'Razer Clone',
  description: 'A clone of razer website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
