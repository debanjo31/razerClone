'use client';
import Link from 'next/link';
import React from 'react';

import { useCartStore } from '../componenets/store/useCartStore';

const Cart = () => {
  const { cartItems, cart } = useCartStore();
  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }
  return (
    <div className='mt-16'>
      {cartItems === 0 ? (
        <div className='container mx-auto my-20'>
          <div className='flex flex-col items-center min-h-[40vh] justify-center p-2 gap-y-4'>
            <span className='capitalize text-xl md:text-2xl'>
              your cart is empty eje mi..
            </span>
            <Link
              className='uppercase hover:text-red-500 text-sm underline'
              href={'/store'}
            >
              Go back home and buy something
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className='bg-stone-900 md:px-10 w-full p-4 flex justify-between items-center capitalize'>
            <h4>your cart total is US${total}</h4>
            <Link
              className='block bg-[#44d62c] p-2 px-8'
              href={'#'}
            >
              CheckOut
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
