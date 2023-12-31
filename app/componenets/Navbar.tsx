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
            src='/img/razer-logo.svg'
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

      {openSideBar && (
        <Sidebar
          openSideBar={openSideBar}
          setOpenSideBar={setOpenSideBar}
        />
      )}
    </div>
  );
};

export default Navbar;
