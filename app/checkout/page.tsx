import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import Paystack from './payment';
import Form from './checkout';
import Head from 'next/head';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Razer Clone| Checkout',
  description: 'A clone of razer website',
};

export default async function ServerPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/account/signin?callbackUrl=/checkout');
  }

  const user = session?.user;

  return (
    <>
      <Head>
        <title>Checkout</title>
        <script
          src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCATImHuPcyhrO3w7jmDLa_SFYXZgK-hog&libraries=places&callback=initMap'
          async
        ></script>
      </Head>
      <section className='bg-black text-white md:min-h-screen py-20'>
        <div className='max-w-4xl mx-auto bg-ct-dark-100 rounded-md mb-2 flex justify-center items-center'>
          {/* {typeof user?.name === 'string' && typeof user?.email === 'string' ? (
          <Paystack
            name={user.name}
            email={user.email}
          />
        ) : null} */}
          {typeof user?.name === 'string' && typeof user?.email === 'string' ? (
            <Form
              name={user.name}
              email={user.email}
            />
          ) : null}
        </div>
      </section>
    </>
  );
}
