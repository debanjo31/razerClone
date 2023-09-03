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
    <section className='flex flex-col gap-6 mt-16'>
      <p>Checkouts</p>
      <Paystack />
    </section>
  );
}
