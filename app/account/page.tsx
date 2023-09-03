import { Metadata } from 'next';
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import Signout from './signout';

export const metadata: Metadata = {
  title: 'Razer Authrmtication',
  description: 'Autheticate either with Github or Google',
};
export default async function ServerPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/account/signin?callbackUrl=/account');
  }
  const user = session?.user;

  return (
    <section className='bg-black  md:min-h-screen py-20'>
      <div className='max-w-4xl mx-auto bg-ct-dark-100 rounded-md mb-2 flex justify-center items-center'>
        <div>
          <p className='mb-3 text-5xl text-center font-semibold'>
            Profile Page
          </p>
          {!user ? (
            <p>Loading...</p>
          ) : (
            <div className='flex items-center gap-8'>
              <div>
                <img
                  src={user.image ? user.image : '/img/keyboard.png'}
                  className='max-h-36 rounded-md'
                  alt={`profile photo of ${user.name}`}
                />
              </div>
              <div className='mt-8'>
                <p className='mb-3'>Name: {user.name}</p>
                <p className='mb-3'>Email: {user.email}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Signout />
    </section>
  );
}
