"use client";
import { useState } from "react";
import Cart from "./Cart";
import { FaBars, FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className='fixed bg-black text-[#7F7D7F] top-0 left-0 w-full z-20 border-b-2 border-[#44d62c] h-16  p-2 md:px-4'>
      <div className='xl:w-5/6 mx-auto flex justify-between md:justify-around xl:justify-between md:text-md'>
        {/* <div
          className="md:hidden mt-3"
          onClick={onOpen}
        >
          <FaBars className="h-5 w-5" />
        </div> */}
        <button
          data-drawer-target='logo-sidebar'
          data-drawer-toggle='logo-sidebar'
          aria-controls='logo-sidebar'
          type='button'
          className='items-center p-2 mt-1 ml-3 text-xl text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          onClick={() => setOpenSideBar(!openSideBar)}
        >
          <span className='sr-only'>Open sidebar</span>
          <FaBars className='h-5 w-5' />
        </button>
        <Link
          href={'/'}
          className='block mt-1'
        >
          <Image
            src='./img/razer-logo.svg'
            alt=''
            height='36'
            width='36'
          />{' '}
        </Link>
        <Link
          href={'/store'}
          className='mt-2 hidden md:block'
        >
          Store
        </Link>
        <Link
          href={'/pc'}
          className='mt-2 hidden md:block'
        >
          PC
        </Link>
        <Link
          href={'/console-gaming'}
          className='mt-2 hidden md:block'
        >
          Console
        </Link>
        <Link
          href={'/mobile'}
          className='mt-2 hidden md:block'
        >
          Mobile
        </Link>
        <Link
          href={'/lifestyle'}
          className='mt-2 hidden md:block'
        >
          Lifestyle
        </Link>
        <Link
          href={'/services'}
          className='mt-2 hidden md:block'
        >
          Services
        </Link>
        <Link
          href={'/community'}
          className='mt-2 hidden md:block'
        >
          Community
        </Link>
        <Link
          href={'/support'}
          className='mt-2 hidden md:block'
        >
          Support
        </Link>
        <p className=' hidden md:block px-4 py-3 text-xs font-medium'>
          <FaSearch className='h-5 w-5' />
        </p>
        <Cart />
      </div>

      {/* {openSideBar && <Sidebar />} */}
      {openSideBar && (
        <aside
          id='logo-sidebar'
          className='fixed bg-[#252525] text-gray-500 top-0 left-0 z-40 w-full h-screen transition-transform  translate-x-0'
          aria-label='Sidebar'
        >
          <div className='flex justify-between px-4'>
            <div className='h-full py-4 overflow-y-auto  '>
              <button
                data-drawer-target='logo-sidebar'
                data-drawer-toggle='logo-sidebar'
                aria-controls='logo-sidebar'
                type='button'
                className=' py-2 text-gray-500  sm:hidden '
                onClick={() => setOpenSideBar(!openSideBar)}
              >
                <span className='sr-only'>Open sidebar</span>
                <FaBars className='h-5 w-5' />
              </button>
            </div>
            <Link
              href={'/'}
              className='block py-2 mt-2'
            >
              <Image
                src='/img/razer-logo.svg'
                alt=''
                height='36'
                width='36'
              />{' '}
            </Link>
            <div></div>
          </div>
          <div className='search px-4 mt-4'>
            <input
              type='search'
              name='search'
              id='search'
              placeholder='Search razer.com'
              className='rounded-md bg-gray-800 w-full '
            />
          </div>
          <div className='flex flex-col px-8'>
            <Link
              href={'/store'}
              className='block py-4 mt-2 border-b-2 border-gray-500'
              onClick={() => setOpenSideBar(!openSideBar)}
            >
              Store
            </Link>
            <Link
              href={'/pc'}
              className='block py-4  border-b-2 border-gray-500'
            >
              PC
            </Link>
            <Link
              href={'/console-gaming'}
              className='block py-4  border-b-2 border-gray-500'
              onClick={() => setOpenSideBar(!openSideBar)}
            >
              Console
            </Link>
            <Link
              href={'/mobile'}
              className='block py-4  border-b-2 border-gray-500'
              onClick={() => setOpenSideBar(!openSideBar)}
            >
              Mobile
            </Link>
            <Link
              href={'/lifestyle'}
              className='block py-4  border-b-2 border-gray-500'
            >
              Lifestyle
            </Link>
            <Link
              href={'/services'}
              className='block py-4  border-b-2 border-gray-500'
            >
              Services
            </Link>
            <Link
              href={'/community'}
              className='block py-4  border-b-2 border-gray-500'
            >
              Community
            </Link>
            <Link
              href={'/support'}
              className='block py-4  border-b-2 border-gray-500'
            >
              Support
            </Link>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Navbar;
