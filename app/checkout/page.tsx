import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import Paystack from './payment';

export default async function ServerPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/account/signin?callbackUrl=/checkout');
  }

  return (
    <section className='bg-black  md:min-h-screen py-20'>
      <div className='max-w-4xl mx-auto bg-ct-dark-100 rounded-md mb-2 flex justify-center items-center'>
        <p>Checkouts</p>
        <Paystack />
      </div>
    </section>
  );
}
