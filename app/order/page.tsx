'use client';
import Link from 'next/link';
import React from 'react';
import { useOrderStore } from '../componenets/store/orderStore';
import useFromStore from '../hook/useFromStore';
import OrderItem from '../componenets/orderItem';
const Page = () => {
  const order = useFromStore(useOrderStore, (state) => state.cart);
  return (
    <div className='mt-16'>
      {order?.length === 0 ? (
        <div className='container mx-auto my-20'>
          <div className='flex flex-col items-center min-h-[40vh] justify-center p-2 gap-y-4'>
            <span className='capitalize text-xl md:text-2xl'>
              you haven't ordered anything eje mi..
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
        <div className='bg-black text-white pb-8'>
          
          <div className='container w-5/6 mx-auto '>
          <p className='font-bold my-4'>Your Completed Orders</p>
            <ul>
              {order?.map((product) => (
                <OrderItem
                  key={product._id}
                  product={product}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
