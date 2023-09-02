import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession, signOut } from 'next-auth/next';

// const session = await getServerSession(options);

//   if (!session) {
//     redirect('/account/signin?callbackUrl=/account');
//   }

export default () => <button onClick={() => signOut()}>Sign out</button>;
