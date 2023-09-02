'use client';
import { signOut } from 'next-auth/react';

export default () => (
  <div className='flex justify-center items-center'>
    <button
      onClick={() => signOut()}
      className='block mt-8 bg-[hsl(112,67%,51%)] text-white p-2 rounded-md'
    >
      Sign out
    </button>
  </div>
);
