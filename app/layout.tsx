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
      <head>
        <meta
          name='twitter:image'
          content='https://razer-clone-three.vercel.app/img/razer-logo.svg'
        />
        <meta
          name='twitter:title'
          content='Buy Razer'
        />
        <meta
          name='twitter:description'
          content='Purchase from Razer and browse through our extensive selection of gaming peripherals, and more at razer.com'
        />

        <meta
          name='twitter:card'
          content='Purchase from Razer and browse through our extensive selection of gaming peripherals, and more at razer.com'
        />

        <meta
          name='og:title'
          content='Buy Razer'
        />
        <meta
          name='og:description'
          content='Purchase from Razer and browse through our extensive selection of gaming peripherals, and more at razer.com'
        />
        <meta
          name='og:image'
          content='https://razer-clone-three.vercel.app/img/razer-logo.svg'
        />

        <meta
          name='twitter:site'
          content='@Razer'
        />
        <meta
          property='og:site_name'
          content='Razer'
        />
        <meta
          property='og:type'
          content='website'
        />
      </head>
      <body className={tweb.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
