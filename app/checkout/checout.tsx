// i want the section in checkout to show if oly there a session.user.name and mail
//
// Compare this snippet from app/checkout/page.tsx:
// import { options } from '../api/auth/[...nextauth]/options';
// import { getServerSession } from 'next-auth/next';
// import { redirect } from 'next/navigation';
// import Paystack from './payment';
//
// export default async function ServerPage() {
//   const session = await getServerSession(options);
//
//   if (!session) {
//     redirect('/account/signin?callbackUrl=/checkout');
//   }
//
//   const user = session?.user;
//
//   return (
//     <section className='bg-black text-white md:min-h-screen py-20'>
//       <div className='max-w-4xl mx-auto bg-ct-dark-100 rounded-md mb-2 flex justify-center items-center'>
//         <Paystack
//           name={user?.name}
//           email={user?.email}
//         />
//       </div>
//     </section>
//   );
// }
// i want the section in checkout to show if oly there a session.user.name and mail
//
// Compare this snippet from app/checkout/page.tsx:
// import { options } from '../api/auth/[...nextauth]/options';
// import { getServerSession } from 'next-auth/next';
// import { redirect } from 'next/navigation';
// import Paystack from './payment';
//
// export default async function ServerPage() {
//   const session = await getServerSession(options);
//
//   if (!session) {
//     redirect('/account/signin?callbackUrl=/checkout');
//   }
//
//   const user = session?.user;
//
//   return (
//     <section className='bg-black text-white md:min-h-screen py-20'>
//       <div className='max-w-4xl mx-auto bg-ct-dark-100 rounded-md mb-2 flex justify-center items-center'>
//         <Paystack
//           name={user?.name}
//           email={user?.email}
//         />
//       </div>
//     </section>
//   );
// }
// i want the section in checkout to show if oly there a session.user.name and mail
//
// Compare this snippet from app/checkout/page.tsx:
// import { options } from '../api/auth/[...nextauth]/options';
