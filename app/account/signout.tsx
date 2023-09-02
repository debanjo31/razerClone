import { signOut } from 'next-auth/react';

export default () => (
  <button
    onClick={() =>
      signOut({ callbackUrl: 'https://razersclone.vercel.app/store' })
    }
  >
    Sign out
  </button>
);
