import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import Signout from './signout';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
export default async function ServerPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/account/signin?callbackUrl=/account');
  }
  const user = session?.user;

  return (
    <section className='bg-ct-blue-600  min-h-screen pt-20'>
      <div className='max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center'>
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
                  src={user.image ? user.image : '/images/default.png'}
                  className='max-h-36'
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
        <Signout />
        {/* <button>
          <Link href={'/api/auth/signout'}
          onClick={(e) => {
            e.preventDefault()
            signOut({redirect : false})
          }}/>
        </button> 
        <button
          className=''
          onClick={() => signOut}
        >
          Log out
        </button>
        */}
      </div>
    </section>
  );
}
