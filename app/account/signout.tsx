'use client';
import { signOut } from 'next-auth/react';

export default () => (
  <button
    onClick={() => signOut()}
    className='block mt-8 bg-[hsl(112,67%,51%)] text-whitessss'
  >
    Sign out
  </button>
);
