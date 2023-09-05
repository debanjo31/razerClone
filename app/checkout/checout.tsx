// pass session?.user.name and session?.user.email as props to the Paystack component
//
// Compare this snippet from app/checkout/payment.tsx:
// import { useState } from 'react';
// import { PaystackButton } from 'react-paystack';
// import { useCartStore } from '../componenets/store/useCartStore';
// import useFromStore from '../hook/useFromStore';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
//
// const Paystack = ({ name, email }: { name: any, email:any }) => {
//   const cart = useFromStore(useCartStore, (state) => state.cart);
//   const { removeFromCart } = useCartStore();
//   let total = 0;
//   if (cart) {
//     total = cart.reduce(
//       (acc, product) => acc + product.price * (product.quantity as number),
//       0
//     );
