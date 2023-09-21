import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import Paystack from './payment';
import Form from './checkout';

export default async function ServerPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/account/signin?callbackUrl=/checkout');
  }

  const user = session?.user;

  return (
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
  );
}
