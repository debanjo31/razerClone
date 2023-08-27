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
            <div className='flex justify-end'>
              <button className='underline underline-offset-4 hover:text-red-500 capitalize'>
                clear cart
              </button>
            </div>
            <div className='my-5 py-5 text-sm border-b border-gray-500'>
              <p>
                If you’re a RazerStore Rewards member, log in with your Razer ID
                and earn up to 1,750 with this purchase. <br />
                <span className='text-blue-400'>
                  What is RazerStore Rewards &amp; what can I do with it?
                </span>
              </p>
            </div>
            <div className='my-10 flex flex-col gap-y-10 gap-x-5 md:flex-row justify-between w-full'>
              <div className='w-full flex items-start flex-col gap-y-5'>
                <button className='text-green-700 flex gap-x-1 items-center capitalize transition ease-in-out duration-500'>
                  have a promo code?{' '}
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    viewBox='0 0 1024 1024'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z'></path>
                  </svg>{' '}
                </button>
                <span className='text-sm text-gray-600'>
                  Actual sales tax will be calculated later <br /> upon entry of
                  your billing/shipping address.
                </span>
              </div>
              <div className='w-full '>
                <div className='flex flex-col items-end justify-end'>
                  <div className='p-4 flex gap-x-5 items-center md:w-[70%] bg-stone-800 rounded-md'>
                    <span className='bg-[#44d62c] h-10 w-10 flex items-center justify-center rounded-full'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 1024 1024'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z'></path>
                      </svg>
                    </span>
                    <span className='flex flex-col gap-y-2'>
                      <p className='text-sm'>
                        Add US$0.21 to offset your carbon footprint
                      </p>
                      <p className='text-sm'>
                        powered by resttorify.{' '}
                        <b className='text-[#44d62c]'>learn more</b>
                      </p>
                    </span>
                    <span className='text-[#44d62c] capitalize'>add</span>
                  </div>

                  <div className='flex items-start w-full justify-start md:w-[70%] mt-10 mb-4 capitalize'>
                    <span className='flex justify-between w-full'>
                      <span>
                        <p>sub total</p>
                        <p>local taxes excluded</p>
                      </span>
                      <span>US$</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-start justify-start w-full md:w-[70%] my-10 capitalize text-2xl'>
              <span className='flex justify-between w-full items-center'>
                <p>your total</p>
                <p>US$27719</p>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

                    
                       
                           