import { signOut } from 'next-auth/react';

export default () => (
  <button onClick={() => signOut({ callbackUrl: '/store' })}>Sign out</button>
);
