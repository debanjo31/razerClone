"use client";
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  FaShoppingCart,
  FaBars,
  FaUserAlt,
  FaGem,
  FaRegUser,
} from 'react-icons/fa';
import useFromStore from '../hook/useFromStore';
import { useCartStore } from './store/useCartStore';
import Link from 'next/link';

const Cart = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  return (
    <div className='relative'>
      <Menu
        as='div'
        className='relative inline-block text-left '
      >
        <div>
          <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-3 text-sm font-medium hover:bg-opacity-30'>
            <FaShoppingCart
              className=' h-5 w-5 '
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2s  w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-800 text-white border-2 border-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none '>
            <div className='px-1 py-1 w-5/6 mx-auto mb-4 '>
              <Menu.Item>
                <p className='py-4 text-center border-b-2 border-gray-500'>
                  <Link href={'/cart'}>
                    <p className='block bg-[#44d62c] p-2 w-4/6 rounded-md mx-auto'>
                      CHECKOUT
                    </p>
                  </Link>
                </p>
              </Menu.Item>
              <Menu.Item>
                <Link href={'/cart'}>
                  <p className='py-2 border-b-2 border-gray-500 text-gray-200'>
                    <FaShoppingCart className='inline-block mr-2' /> Cart ({' '}
                    {cart?.length} )
                  </p>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <p className='py-2 border-b-2 border-gray-500 text-gray-200'>
                  <FaBars className='inline-block mr-2' /> Orders
                </p>
              </Menu.Item>
              <Menu.Item>
                <p className='py-2 border-b-2 border-gray-500 text-gray-200'>
                  <FaUserAlt className='inline-block mr-2' /> Account
                </p>
              </Menu.Item>
              <Menu.Item>
                <p className='py-2 border-b-2 border-gray-500 text-gray-200'>
                  <FaGem className='inline-block mr-2' /> RazerStore Rewards
                </p>
              </Menu.Item>
              <Menu.Item>
                <FaRegUser className='inline-block mr-2' />{' '}
                <p className='py-2  text-gray-200'>Login</p>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <div className='text-white rounded-full bg-[#44d62c] w-5 h-5 text-sm -ml-1 absolute top-0 right-0 text-center'>
        {cart?.length}
      </div>
    </div>
  );
};

export default Cart;
