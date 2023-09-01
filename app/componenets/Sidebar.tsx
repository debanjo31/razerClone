import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBars } from 'react-icons/fa';

interface State {
  openSideBar: boolean;
  setOpenSideBar: (Item: boolean) => void;
}
const Sidebar = ({ setOpenSideBar, openSideBar }: State) => {
  return (
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
          onClick={() => setOpenSideBar(!openSideBar)}
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
          onClick={() => setOpenSideBar(!openSideBar)}
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
          onClick={() => setOpenSideBar(!openSideBar)}
        >
          Lifestyle
        </Link>
        <Link
          href={'/services'}
          className='block py-4  border-b-2 border-gray-500'
          onClick={() => setOpenSideBar(!openSideBar)}
        >
          Services
        </Link>
        <Link
          href={'/community'}
          className='block py-4  border-b-2 border-gray-500'
          onClick={() => setOpenSideBar(!openSideBar)}
        >
          Community
        </Link>
        <Link
          href={'/support'}
          className='block py-4  border-b-2 border-gray-500'
          onClick={() => setOpenSideBar(!openSideBar)}
        >
          Support
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
