'use client';

import React from 'react';
import { useCartStore } from '../componenets/store/useCartStore';

const Cart = () => {
  const { cartItems } = useCartStore();
  return (
    <div className='mt-16'>
      {cartItems === 0 ? (
        <div className='container mx-auto my-20'>
          <div className='flex flex-col items-center min-h-[40vh] justify-center p-2 gap-y-4'>
            <span className='capitalize text-xl md:text-2xl'>
              your cart is empty eje mi..
            </span>
            <a
              className='uppercase hover:text-red-500 text-sm underline'
              href='/'
            >
              Go back home and buy something
            </a>
          </div>
        </div>
      ) : (
        ' Cart Working'
      )}
    </div>
  );
};

export default Cart;
