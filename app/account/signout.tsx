import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { signOut } from 'next-auth/react';
// const session = await getServerSession(options);

//   if (!session) {
//     redirect('/account/signin?callbackUrl=/account');
//   }

export default () => <button onClick={() => signOut()}>Sign out</button>;
