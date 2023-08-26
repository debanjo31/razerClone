'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CartItem from '../componenets/CartItem';
import { useCartStore } from '../componenets/store/useCartStore';
import useFromStore from '../hook/useFromStore';
const Cart = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  
  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }

  return (
    <div className='mt-16'>
      {cart?.length === 0 ? (
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
        <div className='bg-black text-white'>
          <div className='bg-stone-900 w-full p-4'>
            <div className='xl:w-5/6 mx-auto p-4 flex justify-between items-center capitalize'>
              <h4 className='text-white'>your cart total is US${total}</h4>
              <Link
                className='block bg-[#44d62c] rounded-md p-2 px-8'
                href={'#'}
              >
                CheckOut
              </Link>
            </div>
          </div>
          <div className='container w-5/6 mx-auto '>
            <ul>
              {cart?.map((product) => (
                <CartItem
                  key={product._id}
                  product={product}
                />
              ))}
            </ul>
            <div className="flex justify-end">
              <button className="underline underline-offset-4 hover:text-red-500 capitalize">clear cart</button></div>
                <div className="my-5 py-5 text-sm border-b border-gray-500">
                    <p>If you’re a RazerStore Rewards member, log in with your Razer ID and earn up to 1,750 with this purchase. <br /><span className="text-blue-400">What is RazerStore Rewards &amp; what can I do with it?</span></p>
                </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
