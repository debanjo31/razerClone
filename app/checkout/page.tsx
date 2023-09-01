import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export default async function ServerPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/account/signin?callbackUrl=/checkout');
  }

  return (
    <section className='flex flex-col gap-6'>
      <p>Checkouts</p>
    </section>
  );
}
