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
        <script
          src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCATImHuPcyhrO3w7jmDLa_SFYXZgK-hog&libraries=places&callback=initMap'
          async
        ></script>
        <meta
          name='twitter:image'
          content='https://razersclone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpptywyf1%2Fproduction%2F2a4787281d67b349c88b03b1976683ef685d9636-1500x1000.jpg%3Frect%3D250%2C0%2C1000%2C1000%26w%3D500%26h%3D500&w=640&q=75'
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
          content='https://razersclone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpptywyf1%2Fproduction%2F2a4787281d67b349c88b03b1976683ef685d9636-1500x1000.jpg%3Frect%3D250%2C0%2C1000%2C1000%26w%3D500%26h%3D500&w=640&q=75'
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
