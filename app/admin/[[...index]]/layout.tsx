import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Razer Admin',
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
        <main className='mt-16'>{children}</main>
      </body>
    </html>
  );
}
